package feup.edu.lgp.padel4pro

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
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
    var textColors1 = remember { mutableStateOf(Color.Black) }
    var textColors2 = remember { mutableStateOf(Color.Black) }
    var textColorg1 = remember { mutableStateOf(Color.Black) }
    var textColorg2 = remember { mutableStateOf(Color.Black) }
    var selected = remember { mutableStateOf(-1) }

    when(selected.value) {
        -1 -> {
            textColors1.value = wearColorPalette.primary
            textColorg1.value = wearColorPalette.primary
            textColors2.value = wearColorPalette.secondary
            textColorg2.value = wearColorPalette.secondary
        }
        0 -> textColors1.value = Color.White
        1 -> textColorg1.value = Color.White
        2 -> textColors2.value = Color.White
        3 -> textColorg2.value = Color.White

    }
            /*
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
        }*/

    Box(
        modifier = Modifier.fillMaxSize().pointerInput(Unit) {
            var distance = mutableStateOf(0f)
            var threshold = 1

            detectVerticalDragGestures(
                onDragStart = { },
                onDragEnd = {
                    when(selected.value) {
                        0 -> {
                            if (distance.value < -threshold) {
                                // handle swipe up action

                                score1.value += 1
                                if (score1.value == 5) {
                                    score1.value = 0
                                }
                            } else if (distance.value > threshold) {
                                // handle swipe down action
                                score1.value -= 1
                                if (score1.value < 0) {
                                    score1.value = 4
                                }
                            }
                        }
                        1 -> {
                            if (distance.value < -threshold) {
                                // handle swipe up action

                                games1.value += 1
                                if (games1.value == 8) {
                                    games1.value = 0
                                }
                            } else if (distance.value > threshold) {
                                // handle swipe down action
                                games1.value -= 1
                                if (games1.value < 0) {
                                    games1.value = 7
                                }
                            }
                        }
                        2 -> {
                            if (distance.value < -threshold) {
                                // handle swipe up action

                                score2.value += 1
                                if (score2.value == 8) {
                                    score2.value = 0
                                }
                            } else if (distance.value > threshold) {
                                // handle swipe down action
                                score2.value -= 1
                                if (score2.value < 0) {
                                    score2.value = 7
                                }
                            }
                        }
                        3 -> {
                            if (distance.value < -threshold) {
                                // handle swipe up action

                                games2.value += 1
                                if (games2.value == 5) {
                                    games2.value = 0
                                }
                            } else if (distance.value > threshold) {
                                // handle swipe down action
                                games2.value -= 1
                                if (games2.value < 0) {
                                    games2.value = 4
                                }
                            }
                        }
                    }

                }
            ) { change, dragAmount ->
                distance.value = dragAmount
                change.consume()
            }
        },
        contentAlignment = Alignment.Center
    ) {
        Row(
            modifier = Modifier.fillMaxSize(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            //Greeting(greetingName = greetingName)
            Column(
                modifier = Modifier.weight(1f).padding(5.dp),
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
        color = textColors1.value,
        modifier = Modifier
            .padding(16.dp, 0.dp)
            .clickable {
                if (selected.value == -1) {
                    selected.value = 0
                } else {
                    selected.value = -1
                }
            },
        textAlign = TextAlign.Right,
        fontSize = 40.sp,
        fontWeight = FontWeight.ExtraBold
    )



                Text(
                    text = games1.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .clickable {
                            if (selected.value == -1) {
                                selected.value = 1
                            } else {
                                selected.value = -1
                            }
                        },
                    textAlign = TextAlign.Right,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = textColorg1.value
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
                        .clickable {
                            if (selected.value == -1) {
                                selected.value = 2
                            } else {
                                selected.value = -1
                            }
                        },
                    textAlign = TextAlign.Left,
                    fontSize = 40.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = textColors2.value,
                )
                Text(
                    text = games2.value.toString(),
                    modifier = Modifier
                        .padding(16.dp, 0.dp)
                        .clickable {
                            if (selected.value == -1) {
                                selected.value = 3
                            } else {
                                selected.value = -1
                            }
                        },
                    textAlign = TextAlign.Left,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.ExtraBold,
                    color = textColorg2.value
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
