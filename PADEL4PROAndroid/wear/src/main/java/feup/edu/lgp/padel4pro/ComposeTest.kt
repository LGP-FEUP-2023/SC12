package feup.edu.lgp.padel4pro

import org.junit.Rule
import org.junit.Test
import feup.edu.lgp.padel4pro.MainActivity.*;

class MyComposeTest {

    // @get:Rule(order = 1)
    // val composeRule = createAndroidComposeRule<MainActivity>()
    // use createAndroidComposeRule<YourActivity>() if you need access to
    // an activity

    /*@Test
    fun myTest() {
        // Start the app
        composeRule.setContent {
            MyAppTheme {
                MainScreen(uiState = fakeUiState, /*...*/)
            }
        }

        composeRule.onNodeWithText("Request Highlight").performClick()
        composeRule.onNodeWithButton("").performClick()

        composeRule.onNodeWithText("Welcome").assertIsDisplayed()
    }*/

    class TestButton {
        @get:Rule
        val composeTestRule = createAndroidComposeRule(MainActivity::class.java)

        @Test
        fun testButtonClick() {
            val button = composeTestRule.onNode(hasTestTag("yourTestTag"), useUnmergedTree = true)
            button.assertIsDisplayed()
            button.performClick()
        }
    }
}