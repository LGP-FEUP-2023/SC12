package feup.edu.lgp.padel4pro

import androidx.compose.foundation.gestures.*
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Refresh
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
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.ButtonColors
import androidx.wear.compose.material.ButtonDefaults
import androidx.wear.compose.material.Icon
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.swipeable
import feup.edu.lgp.padel4pro.theme.wearColorPalette

@Composable
fun Scoreboard() {
    var score1 = remember { mutableStateOf(0) }
    var score2 = remember { mutableStateOf(0) }
    var scores = remember {
        arrayOf("0", "15", "30", "40", "AD")
    }
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
                    text = scores[score1.value],
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = { },
                                onDragEnd = {
                                    if (distance < -threshold) {
                                        // handle swipe up action

                                        score1.value += 1
                                        if (score1.value == 5) {
                                            score1.value = 0
                                        }
                                    } else if (distance > threshold) {
                                        // handle swipe down action
                                        score1.value -= 1
                                        if (score1.value < 0) {
                                            score1.value = 4
                                        }
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
                    color = wearColorPalette.primary,
                )
                Text(
                    text = games1.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = { },
                                onDragEnd = {
                                    if (distance < -threshold) {
                                        // handle swipe up action
                                        games1.value += 1
                                        if (games1.value == 8) {
                                            games1.value = 0
                                        }
                                    } else if (distance > threshold) {
                                        // handle swipe down action
                                        games1.value -= 1
                                        if (games1.value < 0) {
                                            games1.value = 7
                                        }
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Right,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = wearColorPalette.primary
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
                    text = scores[score2.value],
                    modifier = Modifier
                        .padding(14.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = { },
                                onDragEnd = {
                                    if (distance < -threshold) {
                                        // handle swipe up action

                                        score2.value += 1
                                        if (score2.value == 5) {
                                            score2.value = 0
                                        }
                                    } else if (distance > threshold) {
                                        // handle swipe down action
                                        score2.value -= 1
                                        if (score2.value < 0) {
                                            score2.value = 4
                                        }
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
                    color = wearColorPalette.secondary,
                )
                Text(
                    text = games2.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .pointerInput(Unit) {
                            var distance = 0f
                            var threshold = 75

                            detectVerticalDragGestures(
                                onDragStart = { },
                                onDragEnd = {
                                    if (distance < -threshold) {
                                        // handle swipe up action
                                        games2.value += 1
                                        if (games2.value == 8) {
                                            games2.value = 0
                                        }
                                    } else if (distance > threshold) {
                                        // handle swipe down action
                                        games2.value -= 1
                                        if (games2.value < 0) {
                                            games2.value = 7
                                        }
                                    }
                                }
                            ) { change, dragAmount ->
                                distance = change.position.y



                                change.consume()
                            }
                        },
                    textAlign = TextAlign.Left,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = wearColorPalette.secondary
                )
            }
        }
        Box(
            modifier = Modifier.fillMaxSize().padding(20.dp),
            contentAlignment = Alignment.BottomCenter
        ) {
                Button(
                    onClick = {
                        score1.value = 0
                        score2.value = 0
                        games1.value = 0
                        games2.value = 0
                              },
                    modifier = Modifier
                        .height(20.dp)
                        .width(20.dp),
                    colors = ButtonDefaults.buttonColors(backgroundColor = wearColorPalette.primaryVariant)
                ) {
                    Icon(imageVector = Icons.Filled.Refresh, contentDescription = "reset scores")
                }
        }
    }


}
