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

import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.ScalingLazyColumn
import androidx.wear.compose.material.ScalingLazyListState
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.rememberScalingLazyListState

import com.google.android.gms.common.api.GoogleApiClient
import com.google.android.gms.common.api.ResultCallback
import com.google.android.gms.common.api.Status
import com.google.android.gms.wearable.Node
import com.google.android.gms.wearable.NodeApi
import com.google.android.gms.wearable.Wearable

import feup.edu.lgp.padel4pro.theme.WearAppTheme

/**
 * Simple "Hello, World" app meant as a starting point for a new project using Compose for Wear OS.
 *
 * Displays only a centered [Text] composable, and the actual text varies based on the shape of the
 * device (round vs. square/rectangular).
 *
 * If you plan to have multiple screens, use the Wear version of Compose Navigation. You can carry
 * over your knowledge from mobile and it supports the swipe-to-dismiss gesture (Wear OS's
 * back action). For more information, go here:
 * https://developer.android.com/reference/kotlin/androidx/wear/compose/navigation/package-summary
 */
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
                WearApp("Android")
            }
        }
    }

    private val connectionFailedListener = GoogleApiClient.OnConnectionFailedListener { connectionResult ->
        // Handle connection failure
        setContent {
            WearApp("Android")
        }
    }

    private fun checkConnectionStatus() {
        val nodeResult = Wearable.NodeApi.getConnectedNodes(googleApiClient)
        nodeResult.setResultCallback { result ->
            if (result.status.isSuccess) {
                val nodes = result.nodes
                for (node in nodes) {
                    if (node.isNearby) {
                        // Phone node found, connection exists
                        setContent {
                            WearApp("Android")
                        }
                    }
                }
            } else {
                setContent{
                    Waiting()
                }
            }
        }
    }


}


data class Screen(val title: String, val content: @Composable () -> Unit)

@Composable
fun Waiting(){
    Screen("WaitScreen") {
            WaitScreen()
    }

    WearAppTheme {
        WaitScreen()
    }
}

@Composable
fun WearApp(greetingName: String) {
    val screens = listOf(
       Screen("Menu") {
            Menu()
        },
        Screen("ScoreBoard") {
            Scoreboard()
        });
//        Screen("WaitScreen") {
//            WaitScreen()
//        },
//        Screen("SyncScreen") {
//            SyncScreen()
//        }

    WearAppTheme {
        /* If you have enough items in your list, use [ScalingLazyColumn] which is an optimized
         * version of LazyColumn for wear devices with some added features. For more information,
         * see d.android.com/wear/compose.
         */
        val lazyListState: ScalingLazyListState = rememberScalingLazyListState()

        ScalingLazyColumn(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(12.dp),
            state = lazyListState,
        ) {
            item {
                Menu()
            }
            item {
                Scoreboard()
            }
        }
    }
}


@Composable
fun Greeting(greetingName: String) {
    Text(
        modifier = Modifier.fillMaxWidth(),
        textAlign = TextAlign.Center,
        color = MaterialTheme.colors.primary,
        text = stringResource(R.string.hello_world, greetingName)
    )
}

/*
@Composable
fun handlingSwipe() {
    val interactionSource = remember { MutableInteractionSource() }
    val interactions = remember { mutableStateListOf<Interaction>() }
    LaunchedEffect(interactionSource) {
        interactionSource.interactions.collect { interaction ->
            when (interaction) {
                is DragInteraction.Start -> {
                    interactions.add(interaction)
                }

                is DragInteraction.Stop -> {
                    interactions.remove(interaction.start)
                    print("STARTED DRAGGING")
                }

                is DragInteraction.Cancel -> {
                    interactions.remove(interaction.start)
                    print("STOPPED DRAGGING")
                }
            }
        }
    }
}
*/

@Preview(device = Devices.WEAR_OS_SMALL_ROUND, showSystemUi = true)
@Composable
fun DefaultPreview() {
    WearApp("Preview Android")
}
