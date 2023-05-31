package feup.edu.lgp.padel4pro

import android.text.format.DateFormat
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.ButtonColors
import androidx.wear.compose.material.Icon
import androidx.wear.compose.material.TimeText
import androidx.wear.compose.material.TimeTextDefaults
import androidx.wear.compose.material.contentColorFor
import feup.edu.lgp.padel4pro.theme.wearColorPalette
import java.util.Locale

@Composable
fun buttonColors(
    backgroundColor: Color = wearColorPalette.secondary,
    contentColor: Color = contentColorFor(backgroundColor)
): ButtonColors {
    return androidx.wear.compose.material.ButtonDefaults.buttonColors(
        backgroundColor = backgroundColor,
        contentColor = contentColor
    )
}

@Composable
fun Menu() {
    val ctx = LocalContext.current
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        TimeText(
            timeSource = TimeTextDefaults.timeSource(
                DateFormat.getBestDateTimePattern(Locale.getDefault(), "hh:mm")
            )
        )
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Button(
                onClick = {

                },
                modifier = Modifier
                    .height(75.dp)
                    .width(75.dp)
                    .padding(5.dp),
                colors = buttonColors(),
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.group_3),
                    contentDescription = "highlights"
                )
            }
            Row(
                verticalAlignment = Alignment.Top
            ) {
                Button(
                    onClick = {

                    },
                    modifier = Modifier
                        .height(60.dp)
                        .width(60.dp)
                        .padding(5.dp),

                    ) {
                    Icon(
                        painter = painterResource(id = R.drawable.baseline_ondemand_video_24),
                        contentDescription = "videocam"
                    )
                }
                Button(
                    onClick = {

                    },
                    modifier = Modifier
                        .height(60.dp)
                        .width(60.dp)
                        .padding(5.dp)
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.baseline_personal_video_24),
                        contentDescription = "see highlight"
                    )
                    Icon(
                        painter = painterResource(id = R.drawable.baseline_sports_24),
                        contentDescription = "see highlight"
                    )
                }
            }
        }
    }
}
