package feup.edu.lgp.padel4pro

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
import androidx.compose.ui.unit.dp
import androidx.wear.compose.material.Button
import androidx.wear.compose.material.Icon

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
                onClick = { /* Do something */},
                modifier = Modifier.padding(5.dp)

            ) {
                Icon(imageVector = Icons.Filled.Favorite, contentDescription = "save highlight")
            }
            Row(
                verticalAlignment = Alignment.Top
            ) {
                Button(
                    onClick = { /* Do something */ },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(imageVector = Icons.Filled.List, contentDescription = "save highlight")
                }
                Button(
                    onClick = { /* Do something */ },
                    modifier = Modifier.padding(5.dp)
                ) {
                    Icon(imageVector = Icons.Filled.Phone, contentDescription = "save highlight")
                }


            }

        }
    }

}
