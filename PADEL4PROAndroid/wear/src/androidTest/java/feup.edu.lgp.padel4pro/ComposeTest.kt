package feup.edu.lgp.padel4pro

import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.onRoot
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTouchInput
import androidx.compose.ui.test.swipeLeft
import org.junit.Rule
import org.junit.Test

class MyComposeTest {

    @get:Rule
    val rule = createComposeRule()

    @Test
    fun testSkipButton(){
        rule.setContent { Padel4Pro(false) }
        rule.onNodeWithText("Skip").performClick()

        rule.onNodeWithContentDescription("highlights").assertIsDisplayed()
        rule.onNodeWithContentDescription("videocam").assertIsDisplayed()
        rule.onNodeWithContentDescription("see highlight").assertIsDisplayed()
    }

    @Test
    fun testMainMenu(){
        rule.setContent { Padel4Pro(false) }
        rule.onNodeWithContentDescription("highlights").assertDoesNotExist()
        rule.onNodeWithContentDescription("videocam").assertDoesNotExist()
        rule.onNodeWithContentDescription("see highlight").assertDoesNotExist()

        rule.onNodeWithText("TEAM 1").assertDoesNotExist()
        rule.onNodeWithText("TEAM 2").assertDoesNotExist()

    }

    @Test
    fun testScoreMenu(){
        rule.setContent { Padel4Pro(false) }

        rule.onNodeWithText("Skip").performClick()
        rule.onRoot().performTouchInput { this.swipeLeft() }

        rule.onNodeWithText("TEAM 1").assertIsDisplayed()
        rule.onNodeWithText("TEAM 2").assertIsDisplayed()

    }

}