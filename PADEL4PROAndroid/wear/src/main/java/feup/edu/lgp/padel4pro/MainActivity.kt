/*
 * Copyright 2022 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package feup.edu.lgp.padel4pro

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import com.google.android.gms.common.api.GoogleApiClient
import com.google.android.gms.wearable.Wearable
import feup.edu.lgp.padel4pro.theme.WearAppTheme


class MainActivity : ComponentActivity() {

    private var googleApiClient: GoogleApiClient? = null
    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        // Create the GoogleApiClient instance
        googleApiClient = GoogleApiClient.Builder(this)
            .addConnectionCallbacks(connectionCallbacks)
            .addOnConnectionFailedListener(connectionFailedListener)
            .addApi(Wearable.API)
            .build()

        // Connect to Google Play services
        googleApiClient?.connect()
    }


    override fun onDestroy() {
        super.onDestroy()
        // Disconnect from Google Play services
        googleApiClient?.disconnect()
    }

    private val connectionCallbacks = object : GoogleApiClient.ConnectionCallbacks {
        override fun onConnected(bundle: Bundle?) {
            // Check the connection status
            checkConnectionStatus()
        }

        override fun onConnectionSuspended(i: Int) {
            // Handle connection suspension
            setContent {
                Padel4Pro(false)
            }
        }
    }

    private val connectionFailedListener =
        GoogleApiClient.OnConnectionFailedListener { connectionResult ->
            // Handle connection failure
            setContent {
                Padel4Pro(false)
            }
        }

    private fun checkConnectionStatus() {
        val nodeResult = Wearable.NodeApi.getConnectedNodes(googleApiClient)
        nodeResult.setResultCallback { result ->
            if (result.status.isSuccess) {
                val nodes = result.nodes
                if (nodes.isEmpty()) {
                    setContent {
                        Padel4Pro(false)
                    }
                }
                for (node in nodes) {
                    if (node.isNearby) {
                        // Phone node found, connection exists
                        setContent {
                            Padel4Pro(true)
                        }
                    }
                }
            } else {
                setContent {
                    Padel4Pro(false)
                }
            }
        }

    }


}

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun Padel4Pro(sync: Boolean) {

    WearAppTheme {
        val pagerState = rememberPagerState(0)
        val synced = remember { mutableStateOf(sync) }

        if (synced.value) {
            HorizontalPager(
                state = pagerState,
                pageCount = 2,
                modifier = Modifier.fillMaxSize()
            ) { page ->
                pagerState.currentPage
                when (page) {
                    0 -> {
                        Menu()
                    }

                    1 -> {
                        Scoreboard()
                    }
                }
            }
        } else {
            HorizontalPager(
                state = pagerState,
                pageCount = 1,
                modifier = Modifier.fillMaxSize()
            ) { page ->
                pagerState.currentPage
                when (page) {
                    0 -> {
                        SyncScreen(synced)
                    }
                }
            }
        }
    }
}


@Preview(device = Devices.WEAR_OS_SMALL_ROUND, showSystemUi = true)
@Composable
fun DefaultPreview() {
    Padel4Pro(false)
}