package feup.edu.lgp.padel4pro

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.Icon
import android.widget.Toast
import androidx.compose.ui.platform.LocalContext

@Composable
fun Menu() {
    val ctx = LocalContext.current
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Button(
                onClick = {
                    Toast.makeText(ctx, "Request Highlight", Toast.LENGTH_SHORT).show()
                },
                modifier = Modifier.padding(5.dp)
            ) {
                Icon(painter = painterResource(id = R.drawable.group_3), contentDescription = "highlights")
            }
            Row(
                verticalAlignment = Alignment.Top
            ) {
                Button(
                    onClick = {
                        Toast.makeText(ctx, "Play Highlight", Toast.LENGTH_SHORT).show()
                    },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(painter = painterResource(id = R.drawable.baseline_ondemand_video_24), contentDescription = "videocam")
                }
                Button(
                    onClick = {
                        Toast.makeText(ctx, "Video Referee", Toast.LENGTH_SHORT).show()
                    },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(painter = painterResource(id = R.drawable.baseline_personal_video_24), contentDescription = "see highlight")
                    Icon(painter = painterResource(id = R.drawable.baseline_sports_24), contentDescription = "see highlight")
                }
            }
        }
    }
}
