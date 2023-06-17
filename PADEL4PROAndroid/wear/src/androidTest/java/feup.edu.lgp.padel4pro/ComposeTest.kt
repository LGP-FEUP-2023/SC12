package feup.edu.lgp.padel4pro

import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.hasTestTag
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import org.junit.Rule
import org.junit.Test
import feup.edu.lgp.padel4pro.MainActivity.*;

class MyComposeTest {

     //@get:Rule(order = 1)
     //val composeRule = createAndroidComposeRule<MainActivity>()
     //use createAndroidComposeRule<YourActivity>() if you need access to
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
        /*
        @get:Rule
        val composeTestRule = createAndroidComposeRule(MainActivity::class.java)

        @Test
        fun testButtonClick() {
            val button = composeTestRule.onNode(hasTestTag("yourTestTag"), useUnmergedTree = true)
            button.assertIsDisplayed()
            button.performClick()
        }
         */

        @get:Rule
        val rule = createComposeRule()

        @Test
        fun testButton(){
            rule.setContent { Padel4Pro(false) }
            rule.onNodeWithText("Skip").performClick()

            rule.onNodeWithContentDescription("highlights").assertExists()
        }
    }
}