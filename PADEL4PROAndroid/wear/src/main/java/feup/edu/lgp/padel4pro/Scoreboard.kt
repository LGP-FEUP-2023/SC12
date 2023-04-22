package feup.edu.lgp.padel4pro

import android.gesture.Gesture
import androidx.compose.foundation.gestures.*
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.consumePositionChange
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.swipeable

@Composable
fun Scoreboard() {
    var score1 = remember { mutableStateOf(0) }
    var score2 = remember { mutableStateOf(0) }
    var games1 = remember { mutableStateOf(0) }
    var games2 = remember { mutableStateOf(0) }

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
                    text = score1.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = {  },
                                onDragEnd = {
                                    if (distance < - threshold) {
                                        // handle swipe up action
                                        score1.value += 1
                                    } else if (distance > threshold && score1.value > 0){
                                        // handle swipe down action
                                        score1.value -= 1
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Right,
                    fontSize = 40.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Blue,
                )
                Text(
                    text = games1.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = {  },
                                onDragEnd = {
                                    if (distance < - threshold) {
                                        // handle swipe up action
                                        games1.value += 1
                                    } else if (distance > threshold && games1.value > 0){
                                        // handle swipe down action
                                        games1.value -= 1
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Right,
                    fontSize = 25.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Blue
                )
            }
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
                    text = score2.value.toString(),
                    modifier = Modifier
                        .padding(14.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = {  },
                                onDragEnd = {
                                    if (distance < - threshold) {
                                        // handle swipe up action
                                        score2.value += 1
                                    } else if (distance > threshold && score2.value > 0){
                                        // handle swipe down action
                                        score2.value -= 1
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Left,
                    fontSize = 40.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Yellow
                )
                Text(
                    text = games2.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = {  },
                                onDragEnd = {
                                    if (distance < - threshold) {
                                        // handle swipe up action
                                        games2.value += 1
                                    } else if (distance > threshold && games2.value > 0){
                                        // handle swipe down action
                                        games2.value -= 1
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Left,
                    fontSize = 25.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = Color.Yellow
                )
            }
        }
    }


}
