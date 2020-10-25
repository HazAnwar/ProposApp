package com.hazanwar.proposapp

import android.content.Context
import android.util.Log
import android.view.WindowManager
import android.webkit.JavascriptInterface
import com.android.volley.Request.Method.POST
import com.android.volley.Response.ErrorListener
import com.android.volley.Response.Listener
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject


class WebAppInterface(private val mContext: Context) {
    @JavascriptInterface
    fun setFlag() {
        (mContext as MainActivity).runOnUiThread {
            mContext.window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        }
    }

    @JavascriptInterface
    fun clearFlag() {
        (mContext as MainActivity).runOnUiThread {
            mContext.window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        }
    }

    @JavascriptInterface
    fun openBoot() {
        val queue = Volley.newRequestQueue(mContext)
        val url = "https://owner-api.teslamotors.com/api/1/vehicles/TESLA_CAR_ID_GOES_HERE"
        val accessToken = "TESLA API TOKEN HERE"
        val bootParams = JSONObject()
        bootParams.put("which_trunk", "rear")

        val wakeupReq: JsonObjectRequest = object : JsonObjectRequest(
            POST, "${url}/wake_up", null,
            Listener<JSONObject?> {
                Log.i("Volley", "Response from wakeup call: $it");
            },
            ErrorListener { error -> Log.e("Volley", error.toString()) }) {
            override fun getHeaders(): Map<String, String> {
                val headers: MutableMap<String, String> = HashMap()
                headers["Authorization"] = "Bearer $accessToken"
                return headers
            }
        }
        queue.add(wakeupReq)

        val openBootReq: JsonObjectRequest = object : JsonObjectRequest(
            POST, "${url}/command/actuate_trunk", bootParams,
            Listener<JSONObject?> {
                Log.i("Volley", "Response from open boot call: $it");
                if (!it?.getJSONObject("response")?.getBoolean("result")!!) {
                    openBoot();
                };
            },
            ErrorListener { error ->
                Log.e("Volley", error.toString())
                openBoot();
            }) {
            override fun getHeaders(): Map<String, String> {
                val headers: MutableMap<String, String> = HashMap()
                headers["Authorization"] = "Bearer $accessToken"
                return headers
            }
        }

        queue.add(openBootReq)
    }
}
