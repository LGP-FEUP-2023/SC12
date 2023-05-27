package feup.edu.lgp.padel4pro

import androidx.compose.runtime.remember
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

data class AppUIState(
    val score1: Int = 0,
    val score2: Int = 0,
    val games1: Int = 0,
    val games2: Int = 0,
)

class AppViewModel : ViewModel() {

    // Expose screen UI state
    private val _uiState = MutableStateFlow(AppUIState())
    val uiState: StateFlow<AppUIState> = _uiState.asStateFlow()

    // Handle business logic
    fun rollDice() {



    }

    fun increaseScore(mainPlayer: Boolean) {
        if(mainPlayer) {
            var score1 = uiState.value.score1
            var games1 = uiState.value.games1
            score1 += 1
            if (score1 == 5) {
                games1 += 1
                if (games1 == 8) {
                    games1 = 0
                }
                score1 = 0
            }
            _uiState.update { currentState ->
                currentState.copy(
                    score1 = score1,
                    games1 = games1
                )
            }

        } else {
            var score2 = uiState.value.score2
            var games2 = uiState.value.games2
            score2 += 1
            if (score2 == 5) {
                games2 += 1
                if (games2 == 8) {
                    games2 = 0
                }
                score2 = 0
            }
            _uiState.update { currentState ->
                currentState.copy(
                    score2 = score2,
                    games2 = games2
                )
            }
        }
    }

    fun decreaseScore(mainPlayer: Boolean) {
        if(mainPlayer) {
            var score1 = uiState.value.score1
            score1 -= 1
            if (score1 < 0) {
                score1 = 4
            }
            _uiState.update { currentState ->
                currentState.copy(
                    score1 = score1
                )
            }

        } else {
            var score2 = uiState.value.score2
            score2 -= 1
            if (score2 < 0) {
                score2 = 4
            }
            _uiState.update { currentState ->
                currentState.copy(
                    score2 = score2
                )
            }
        }
    }

    fun increaseGames(mainPlayer: Boolean) {
        if(mainPlayer) {
            var games1 = uiState.value.games1
            games1 += 1
            if (games1 == 8) {
                games1 = 0
            }
            _uiState.update { currentState ->
                currentState.copy(
                    games1 = games1
                )
            }

        } else {
            var games2 = uiState.value.games2
            games2 += 1
            if (games2 == 8) {
                games2 = 0
            }
            _uiState.update { currentState ->
                currentState.copy(
                    games2 = games2
                )
            }
        }
    }

    fun decreaseGames(mainPlayer: Boolean) {
        if(mainPlayer) {
            var games1 = uiState.value.games1
            games1 -= 1
            if (games1 < 0) {
                games1 = 7
            }
            _uiState.update { currentState ->
                currentState.copy(
                    games1 = games1
                )
            }

        } else {
            var games2 = uiState.value.games2
            games2 -= 1
            if (games2 < 0) {
                games2 = 7
            }
            _uiState.update { currentState ->
                currentState.copy(
                    games2 = games2
                )
            }
        }
    }
}