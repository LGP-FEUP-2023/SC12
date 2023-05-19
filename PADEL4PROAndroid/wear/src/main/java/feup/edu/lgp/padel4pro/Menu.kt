package feup.edu.lgp.padel4pro

import android.icu.number.IntegerWidth
import android.text.format.DateFormat
import android.widget.Toast
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
import androidx.wear.compose.material.Icon
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.lightColors
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.layout.onPlaced
import androidx.compose.ui.platform.LocalContext
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
                    Toast.makeText(ctx, "Request Highlight", Toast.LENGTH_SHORT).show()
                },
                modifier = Modifier
                    .padding(5.dp)
                    .height(70.dp)
                    .width(70.dp),
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
                        Toast.makeText(ctx, "Play Highlight", Toast.LENGTH_SHORT).show()
                    },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(
                        painter = painterResource(id = R.drawable.baseline_ondemand_video_24),
                        contentDescription = "videocam"
                    )
                }
                Button(
                    onClick = {
                        Toast.makeText(ctx, "Video Referee", Toast.LENGTH_SHORT).show()
                    },
                    modifier = Modifier.padding(5.dp)
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
            Row(
               verticalAlignment = Alignment.CenterVertically
            ){
                Icon(painter = painterResource(id = R.drawable.iconmonstr_angel_down_thin), contentDescription = "arrow down 1")
            }
        }
    }
}
