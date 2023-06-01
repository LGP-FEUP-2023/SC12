package feup.edu.lgp.padel4pro

import org.junit.Rule
import org.junit.Test
import feup.edu.lgp.padel4pro.MainActivity.*;

class MyComposeTest {

    @get:Rule(order = 1)
    val composeRule = createAndroidComposeRule<MainActivity>()
    // use createAndroidComposeRule<YourActivity>() if you need access to
    // an activity

    @Test
    fun myTest() {
        // Start the app
        composeTestRule.setContent {
            MyAppTheme {
                MainScreen(uiState = fakeUiState, /*...*/)
            }
        }

        composeTestRule.onNodeWithText("Continue").performClick()

        composeTestRule.onNodeWithText("Welcome").assertIsDisplayed()
    }
}