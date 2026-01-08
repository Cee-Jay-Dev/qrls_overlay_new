# QRLS Overlay

## How to Install

1. **Install Node.js** – **IMPORTANT:** don’t skip this, the overlay won’t work without it.  
   [Download Node.js](https://nodejs.org/en/download)

2. **Install Fonts** – **ALSO IMPORTANT:** open the `font` folder, double-click all fonts, and click the **Install** button at the top left.

3. **Install SOS Relay (if needed)** – If you don’t have SOS Relay, copy `SOS.dll` from `bakkes_sos_plugin` and paste it in:  
> If you’ve changed the Bakkesmod install location, put it in your plugins folder there.

4. **Open StreamLabs OBS or OBS** – Make a browser source, set it to **1920x1080** resolution.

5. **Run the Overlay** – Open Rocket League & Bakkesmod, then run `start_overlay.bat` by double-clicking it.

**Disclaimer:** Do **NOT** touch any overlay files. If you break your stream, that’s on you.

---

## Links

- **Control Panel:** [http://localhost:3000/controlpanel](http://localhost:3000/controlpanel)  
- **Overlay Screen:** [http://localhost:3000](http://localhost:3000)

---

## Notes

- Make sure Node.js is installed **before** running the overlay.  
- The browser source in OBS **must** be 1920x1080.  
- All fonts from the `font` folder are required for proper display.  
- The overlay communicates via WebSockets to the control panel, so both must be running.  
