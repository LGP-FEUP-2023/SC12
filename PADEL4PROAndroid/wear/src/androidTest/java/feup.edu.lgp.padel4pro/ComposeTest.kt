package feup.edu.lgp.padel4pro

import androidx.activity.compose.setContent
import androidx.compose.runtime.MutableState
import androidx.compose.ui.test.GestureScope
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.assertIsNotDisplayed
import androidx.compose.ui.test.hasTestTag
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onAllNodesWithContentDescription
import androidx.compose.ui.test.onNodeWithContentDescription
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.onRoot
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performGesture
import androidx.compose.ui.test.performTouchInput
import androidx.compose.ui.test.swipe
import androidx.compose.ui.test.swipeLeft
import org.junit.Rule
import org.junit.Test
import feup.edu.lgp.padel4pro.MainActivity.*;

class MyComposeTest {


    @get:Rule
    //val rule = createAndroidComposeRule<MainActivity>()
    val rule = createComposeRule()

    @Test
    fun testSkipButton(){
        //rule.activity.setContent { Padel4Pro(false) }
        rule.setContent { Padel4Pro(false) }
        rule.onNodeWithText("Skip").performClick()

        rule.onNodeWithContentDescription("highlights").assertIsDisplayed()
        rule.onNodeWithContentDescription("videocam").assertIsDisplayed()
        rule.onNodeWithContentDescription("see highlight").assertIsDisplayed()
    }

    @Test
    fun testMainMenu(){
        //rule.activity.setContent { Padel4Pro(false) }
        rule.setContent { Padel4Pro(false) }
        rule.onNodeWithContentDescription("highlights").assertDoesNotExist()

    }

    @Test
    fun testScoreMenu(){
        //rule.activity.setContent { Padel4Pro(false) }
        rule.setContent { Padel4Pro(false) }

        rule.onNodeWithText("Skip").performClick()
        rule.onRoot().performTouchInput { this.swipeLeft() }

        rule.onNodeWithText("TEAM 1").assertIsDisplayed()
        rule.onNodeWithText("TEAM 2").assertIsDisplayed()

    }

}