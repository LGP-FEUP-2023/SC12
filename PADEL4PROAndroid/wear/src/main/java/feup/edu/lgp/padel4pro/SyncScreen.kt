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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Icon
import androidx.wear.compose.material.Text
import feup.edu.lgp.padel4pro.theme.wearColorPalette

@Composable
fun SyncScreen() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Row(
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.baseline_watch_24),
                    tint = Color.LightGray,
                    contentDescription = null
                )
                Icon(
                    painter = painterResource(id = R.drawable.baseline_sync_24),
                    tint = Color.LightGray,
                    contentDescription = null
                )
                Icon(
                    painter = painterResource(id = R.drawable.baseline_smartphone_24),
                    tint = Color.LightGray,
                    contentDescription = null
                )
            }


            Text(
                text = "Waiting for\n" +
                        "phone synchronization...",
                modifier = Modifier.padding(10.dp, 0.dp),
                fontWeight = FontWeight(750),
                textAlign = TextAlign.Center,
                fontSize = 15.sp,
                color = wearColorPalette.secondary
            )

        }
    }

}
