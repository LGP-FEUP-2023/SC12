package feup.edu.lgp.padel4pro

import androidx.compose.foundation.layout.*
import androidx.compose.material.Divider
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Text

@Composable
fun Scoreboard() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Row(
            modifier = Modifier.fillMaxSize(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            //Greeting(greetingName = greetingName)
            Column(
                modifier = Modifier.weight(1f),
                horizontalAlignment = Alignment.End
            ) {
                // First column content
                Text(
                    text ="TEAM 1",
                    modifier = Modifier.padding(7.dp, 0.dp),
                    textAlign = TextAlign.Right,
                    fontSize = 10.sp,
                    color = Color.White
                )
                Text(
                    text ="43",
                    modifier = Modifier.padding(16.dp, 0.dp),
                    textAlign = TextAlign.Right,
                    fontSize = 40.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Blue,
                )
                Text(
                    text ="32",
                    modifier = Modifier.padding(16.dp, 0.dp),
                    textAlign = TextAlign.Right,
                    fontSize = 25.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Blue
                )
            }
            Divider(
                modifier = Modifier
                    .width(3.dp)
                    .fillMaxHeight()
                    .padding(0.dp, 10.dp, 0.dp,10.dp),
                color = Color.Gray
            )
            Column(
                modifier = Modifier.weight(1f),
                horizontalAlignment = Alignment.Start
            ) {
                // Second column content
                Text(
                    text ="TEAM 2",
                    modifier = Modifier.padding(7.dp, 0.dp),
                    textAlign = TextAlign.Left,
                    fontSize = 10.sp,
                    color = Color.White
                )
                Text(
                    text ="71",
                    modifier = Modifier.padding(14.dp, 0.dp),
                    textAlign = TextAlign.Left,
                    fontSize = 40.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Yellow
                )
                Text(
                    text ="42",
                    modifier = Modifier.padding(16.dp, 0.dp),
                    textAlign = TextAlign.Left,
                    fontSize = 25.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Yellow
                )
            }
        }
    }


}
