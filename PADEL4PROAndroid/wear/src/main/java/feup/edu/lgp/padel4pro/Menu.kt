package feup.edu.lgp.padel4pro

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Phone
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.Icon
import androidx.wear.compose.material.contentColorFor
import feup.edu.lgp.padel4pro.theme.wearColorPalette

@Composable
fun Menu() {
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
                onClick = { /* Do something */ },
                modifier = Modifier.padding(5.dp)
            ) {
                // contentColorFor(backgroundColor = wearColorPalette.secondary)
                Icon(painter = painterResource(id = R.drawable.outline_videocam_24), contentDescription = "highlights")
                Icon(painter = painterResource(id = R.drawable.baseline_thumb_up_off_alt_24), contentDescription = "highlights")
            }
            Row(
                verticalAlignment = Alignment.Top
            ) {
                Button(
                    onClick = { /* Do something */ },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(painter = painterResource(id = R.drawable.baseline_ondemand_video_24), contentDescription = "videocam")
                }
                Button(
                    onClick = { /* Do something */ },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(painter = painterResource(id = R.drawable.baseline_personal_video_24), contentDescription = "see highlight")
                    Icon(painter = painterResource(id = R.drawable.baseline_sports_24), contentDescription = "see highlight")
                }


            }

        }
    }

}
