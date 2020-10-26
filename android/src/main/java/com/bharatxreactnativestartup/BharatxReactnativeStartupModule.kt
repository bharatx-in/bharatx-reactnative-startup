package com.bharatxreactnativestartup

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import tech.bharatx.startup.BharatXStartupTierManager

class BharatxReactnativeStartupModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "BharatxReactnativeStartup"
  }

  @ReactMethod
  fun initialize(partnerId: String, partnerApiKey: String) {
    BharatXStartupTierManager.initialize(currentActivity!!, partnerId, partnerApiKey)
  }

}
