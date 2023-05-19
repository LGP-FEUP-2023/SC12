package feup.edu.lgp.padel4pro

import android.text.format.DateFormat
import androidx.compose.foundation.gestures.*
import androidx.compose.foundation.layout.*
import android.content.res.Resources.Theme
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectVerticalDragGestures
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Done
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.ButtonDefaults
import androidx.wear.compose.material.Icon
import androidx.wear.compose.material.MaterialTheme
import androidx.wear.compose.material.Text
import androidx.wear.compose.material.TimeText
import androidx.wear.compose.material.TimeTextDefaults
import androidx.wear.compose.material.swipeable
import androidx.wear.compose.material.dialog.Alert
import androidx.wear.compose.material.dialog.Dialog
import feup.edu.lgp.padel4pro.theme.wearColorPalette
import java.util.Locale


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
    var textbgs1 = remember { mutableStateOf(Color.Black) }
    var textbgs2 = remember { mutableStateOf(Color.Black) }
    var textbgg1 = remember { mutableStateOf(Color.Black) }
    var textbgg2 = remember { mutableStateOf(Color.Black) }
    var selected = remember { mutableStateOf(-1) }

    var showDialog = remember { mutableStateOf(false) }

    when (selected.value) {
        -1 -> {
            textColors1.value = wearColorPalette.primary
            textColorg1.value = wearColorPalette.primary
            textColors2.value = wearColorPalette.secondary
            textColorg2.value = wearColorPalette.secondary
            textbgs1.value = Color.Black
            textbgs2.value = Color.Black
            textbgg1.value = Color.Black
            textbgg2.value = Color.Black
        }

        0 -> {
            textColors1.value = Color.Black
            textbgs1.value = wearColorPalette.primary
        }

        1 -> {
            textColorg1.value = Color.Black
            textbgg1.value = wearColorPalette.primary
        }

        2 -> {
            textColors2.value = Color.Black
            textbgs2.value = wearColorPalette.secondary
        }

        3 -> {
            textColorg2.value = Color.Black
            textbgg2.value = wearColorPalette.secondary
        }

    }

    MaterialTheme(){
        Box(
            modifier = Modifier
                .fillMaxSize()
                .pointerInput(Unit) {
                    var distance = mutableStateOf(0f)
                    var threshold = 1

                    detectVerticalDragGestures(
                        onDragStart = { },
                        onDragEnd = {
                            when (selected.value) {
                                0 -> {
                                    if (distance.value < -threshold) {
                                        // handle swipe up action

                                        score1.value += 1
                                        if (score1.value == 5) {
                                            games1.value += 1
                                            if (games1.value == 8) {
                                                games1.value = 0
                                            }
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
                                        if (score2.value == 5) {
                                            games2.value += 1
                                            if (games2.value == 8) {
                                                games2.value = 0
                                            }
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
                                        if (games2.value == 8) {
                                            games2.value = 0
                                        }
                                    } else if (distance.value > threshold) {
                                        // handle swipe down action
                                        games2.value -= 1
                                        if (games2.value < 0) {
                                            games2.value = 7
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
                    modifier = Modifier
                        .weight(1f)
                        .padding(5.dp),
                    horizontalAlignment = Alignment.End
                ) {
                    // First column content
                    Text(
                        text = "TEAM 1",
                        modifier = Modifier.padding(15.dp, 7.dp),
                        textAlign = TextAlign.Right,
                        fontSize = 10.sp,
                        color = Color.White
                    )
                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .size(65.dp)
                            .background(textbgs1.value, shape = CircleShape)
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null
                            ) {
                                if (selected.value == -1) {
                                    selected.value = 0
                                } else {
                                    selected.value = -1
                                }
                            }
                    ) {
                        Text(
                            text = scores[score1.value],
                            color = textColors1.value,
                            textAlign = TextAlign.Right,
                            fontSize = 40.sp,
                            fontWeight = FontWeight.ExtraBold
                        )
                    }


                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .size(35.dp)
                            .background(textbgg1.value, shape = CircleShape)
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null
                            ) {
                                if (selected.value == -1) {
                                    selected.value = 1
                                } else {
                                    selected.value = -1
                                }
                            }
                    ) {
                        Text(
                            text = games1.value.toString(),
                            textAlign = TextAlign.Right,
                            fontSize = 25.sp,
                            fontWeight = FontWeight.ExtraBold,
                            color = textColorg1.value
                        )
                    }
                }

                Column(
                    modifier = Modifier.weight(1f),
                    horizontalAlignment = Alignment.Start
                ) {
                    // Second column content
                    Text(
                        text = "TEAM 2",
                        modifier = Modifier.padding(15.dp, 7.dp),
                        textAlign = TextAlign.Left,
                        fontSize = 10.sp,
                        color = Color.White
                    )
                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .size(65.dp)
                            .background(textbgs2.value, shape = CircleShape)
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null
                            ) {
                                if (selected.value == -1) {
                                    selected.value = 2
                                } else {
                                    selected.value = -1
                                }
                            }
                    ) {
                        Text(
                            text = scores[score2.value],
                            textAlign = TextAlign.Left,
                            fontSize = 40.sp,
                            fontWeight = FontWeight.ExtraBold,
                            color = textColors2.value,
                        )
                    }
                    Box(
                        contentAlignment = Alignment.Center,
                        modifier = Modifier
                            .size(35.dp)
                            .background(textbgg2.value, shape = CircleShape)
                            .clickable(
                                interactionSource = remember { MutableInteractionSource() },
                                indication = null
                            ) {
                                if (selected.value == -1) {
                                    selected.value = 3
                                } else {
                                    selected.value = -1
                                }
                            }
                    ) {
                        Text(
                            text = games2.value.toString(),
                            textAlign = TextAlign.Left,
                            fontSize = 25.sp,
                            fontWeight = FontWeight.ExtraBold,
                            color = textColorg2.value
                        )
                    }
                }
            }
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(10.dp),
                contentAlignment = Alignment.BottomCenter
            ) {
                Button(
                    onClick = {
                        showDialog.value = true

                        selected.value = -1
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

        Dialog(
            showDialog = showDialog.value,
            onDismissRequest = { showDialog.value = false }
        ) {
            Alert(
                verticalArrangement = Arrangement.spacedBy(4.dp, Alignment.Top),
                contentPadding =
                PaddingValues(start = 10.dp, end = 10.dp, top = 24.dp, bottom = 52.dp),
                icon = {
                    Icon(imageVector = Icons.Filled.Refresh, contentDescription = "reset score")
                },
                title = { Text(text = "Reset Scores", textAlign = TextAlign.Center) },
                message = {
                    Text(
                        text = "Are you sure?",
                        textAlign = TextAlign.Center,
                        style = MaterialTheme.typography.body2
                    )
                },
            ) {
                item {
                    Row(
                        modifier = Modifier.fillMaxSize(),
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Button(
                            onClick = {
                                score1.value = 0
                                score2.value = 0
                                games1.value = 0
                                games2.value = 0
                                showDialog.value = false
                            },
                            modifier = Modifier
                                .padding(5.dp),
                            colors = ButtonDefaults.buttonColors(
                                backgroundColor = feup.edu.lgp.padel4pro.theme.success
                            )
                        ) {
                            Icon(imageVector = Icons.Filled.Done, contentDescription = "confirm")
                        }
                        Button(
                            onClick = {
                                showDialog.value = false
                            },
                            modifier = Modifier
                                .padding(5.dp),

                            colors = ButtonDefaults.buttonColors(
                                backgroundColor = feup.edu.lgp.padel4pro.theme.grey
                            )
                        ) {
                            Icon(imageVector = Icons.Filled.Close, contentDescription = "cancel")
                        }

                    }

                }
            }
        }
    }

}
