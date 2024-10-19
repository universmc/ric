Introduction
About This Software
The MPD218 Editor is a software application that lets you change the MIDI messages sent from your Akai Professional MPD218. This editor lets you set each pad and knob (across all available banks) to send a unique command to your software or external MIDI device, giving you deep, dynamic, and powerful control over your performance.
Please read this manual to get a better understanding of the MPD218 Editor.
System Requirements and Product Support
For complete system requirements, compatibility information, and product registration, visit the Akai Professional website: akaipro.com.
For additional support, visit akaipro.com/support.
  4

   Getting Started
Installation
1. Double-click the .exe (Windows®) or .pkg (Mac OS® X®) installer file you downloaded.
2. Follow the on-screen instructions.
Setup
1. Optional: Connect your MPD218 to your computer using a standard USB cable, and make sure both are powered on. (If you are using a USB hub, make sure it is a powered hub.) You can still use the editor without connecting MPD218, but you will not be able to send Presets to it or load (get) Presets from it.
2. Open the MPD218 Editor.
• Windows: The file is located in C:\Program Files\Akai Professional\MPD218 Editor.
• Mac OS X: The file is located in Applications/MPD218 Editor.
3. If your MPD218 is not connected to your computer, simply start using the MPD218 Editor! If your MPD218 is connected to your computer, click the File menu and select MIDI
Setup. In the window that appears, select the following options, and then click OK:
• Windows: Set both Input and Output to MPD218.
• Mac OS X: Set both Input and Output to MPD218 Port A.
4. Start using the MPD218 Editor! See the Operation chapter to learn more about the software in depth.
  5

   Operation
MPD218 Editor’s graphical interface looks just like your MPD218 but with some extra information about the MIDI messages it sends. All of this information is stored in a Preset, which determines how your MPD218 will command your software. Learn more about this in Managing Your Presets.
MPD218 has two types of hardware controls whose MIDI messages you can edit. See Editing Controls to learn how to adjust the MIDI message sent by each type of hardware control.
  Important: Remember that there are three banks of pads and three banks of knobs. When editing your mappings, make sure you are on the bank you want. Click a Pad Bank button in the graphical interface to select the desired pad bank. The button will light up, and the values on the graphical interface will reflect those of the current bank only. All three banks of knobs are visible.
6

   Managing Your Presets
About Presets
A Preset is a preset file (.mpd218) containing all of the MIDI assignments you make in the Editor. Using Presets lets you maintain several different control configurations to use in different situations. For instance, you may use different Presets with different kinds of software, or you may some Presets for production and others for performance.
Your MPD218 can store 16 Presets at a time. You can store additional Presets on your computer to load onto your MPD218 with this editor.
This chapter explains how to load Presets into the editor (Loading Presets), save Presets onto your computer (Saving Presets), and send Presets to your connected MPD218 (Sending Presets).
 7

   Loading Presets
To edit a Preset, you first have to load it into the MPD218 Editor.
To load a Preset from your connected MPD218:
1. Click the File menu and select Load
from Hardware.
2. In the Load Presets from Hardware window that appears, click the Get button next to the desired Preset number.
To cancel, simply close the Load Presets from Hardware window.
If you make changes to any Presets or current settings or assignments on your MPD218 after opening this window, click Refresh to refresh the options.
3. When you’re done, close the Load Presets from Hardware window.
To load a Preset from your computer, do one of the following:
• Click the File menu and select Open Preset.
• Press Ctrl+O (Windows) or +O (Mac OS X).
After that, locate the desired Preset file (.mpd218), and click Open.
 Note: Editing a loaded Preset will not affect the Preset stored on your MPD218. See Sending Presets to learn how to send the edited Preset to your MPD218.
 8

   Saving Presets
Saving a Preset on your computer lets you edit it or send it to your MPD218 in the future. All settings and assignments currently in the editor will be saved in the Preset.
To save the Preset, do one of the following:
• Click the File menu and select Save.
• Press Ctrl+S (Windows) or+S (Mac OS X).
If this is the first time you are saving the Preset, select the desired location, enter a file name, and click Save. The Preset will be saved as an .mpd218 file.
If this is not the first time you are saving the Preset, the Preset will save with the same name and to the same location.
To save a Preset under a different name or to a different location, click the File menu and select Save As. After that, select the desired location, enter a file name, and click Save. The Preset will be saved as an .mpd218 file.
9

   Sending Presets
Sending a Preset to your connected MPD218 lets you transfer the Preset from the editor to your MPD218’s internal memory. All settings and assignments currently in the editor will be sent to your MPD218.
To send a Preset to your connected MPD218:
1. Click Send to Hardware.
2. In the Send Preset window that appears, click the drop-down menu to select the desired Preset number.
To cancel, simply close the Send Preset window.
3. Click Send to confirm. Sending a Preset will overwrite
that Preset number on your MPD218.
4. When you’re done, close the Send Preset window.
 10

   Editing Controls
To edit the parameters for a pad or control on your MPD218, click it in the software’s graphical user interface.
21
Click one of the types of controls to jump to that section in this User Guide: (1) Pads, (2) Knobs, or (3) Other Preset Information.
 Tip: To copy the parameters of one pad or knob to another, simply click and drag it. To access another pad bank, hover the mouse cursor over the desired Pad Bank button.
  3
  11

   Pads
These are the available parameters and settings for MPD218’s pads.
   Note: Use the Pad Bank buttons to access all pads (1–48).
Parameter Type
MIDI Channel
MIDI Note
Aftertouch
Description
The type of event that will be sent.
This setting determines over which MIDI channel data is sent.
If Note is the selected Type, this assigns the note number.
If Note is the selected Type, this determines the Aftertouch settings.
Available Settings
Note
Program Program Bank
1–16
0–127 (C0–G9)
Off
Chn (Channel Aftertouch) Poly (Poly Aftertouch)
 12

  Program Number
Program MSB Program LSB
Trigger Mode
If Program or Program Bank is the selected Type, this determines the Program number.
If Program or Program Bank is the selected Type, these determine the MSB (Most Significant Bit) and LSB (Least Significant Bit).
If Note is the selected Type, this determines whether it is in Toggle or Momentary Mode.
0–127
0–127
Toggle Momentary
13

   Knobs
These are the available parameters and settings for MPD218’s knobs.
   Note: All three banks of knobs (1–18) are visible simultaneously.
Parameter Type
Description
The type of message that will be sent.
Available Settings
CC
Aftertouch
Increment/Decrement 1 (Inc/Dec1)
Increment/Decrement 2 (Inc/Dec2)
1–16
0–127
 MIDI Channel
MIDI CC
This setting determines over which MIDI channel data is sent.
If CC or Inc/Dec2 is the selected Type, this determines the MIDI CC number.
14

  Min Max
NRPN MSB NRPN LSB
Value
If CC or Aftertouch is the selected Type, these determine the lowest (Min) and highest (Max) values. (If Min is higher than Max, the knob’s polarity will be reversed.)
If Inc/Dec1 is the selected Type, these determine the MSB (Most Significant Bit) and LSB (Least Significant Bit).
If Inc/Dec1 is the selected Type, this determines the value sent by an Increment (CC #96) or Decrement (CC #97) message.
0–127
0–127
0–127
15

   Other Preset Information
These are the available parameters and settings for the preset in general.
 Parameter Preset
Tempo
Time Division
Swing
Description
The name of the preset.
The tempo as indicated in beats per minute.
The speed of the Note Repeat repetition as a division of the master tempo or external clock.
The amount of swing used in the repeated notes of the Note Repeat feature.
Available Settings
Standard alphanumeric characters
30–300
1/4, 1/4T, 1/8, 1/8T, 1/16, 1/16T, 1/32, 1/32T
(T denotes a triplet-based time division.)
Off (50%), 54%, 56%, 58%, 60%, 62%
 16

   Other Functions
Auto-Populate Tool
The auto-populate feature lets you quickly apply common “patterns” of assignments to the pads and knobs, sparing you the time of having to create each assignment manually.
To open the Auto-Populate Tool, click the Tools menu and select Auto Populate Tool.
  17

  To auto-populate a pad or knob:
1. For each type of control (pad or knob), check the box to the left of the parameter to select it. Only the selected parameters will be auto-populated. You can do this for multiple parameters.
2. If the parameter has a drop-down menu, click it and select the desired setting.
If the parameter requires you to enter a number, click the field, delete the current number
(if necessary), type a new number, and then press Enter on your computer keyboard.
3. Repeat Step 2 for each additional parameter you want to auto-populate (if necessary).
4. Under Apply to Banks, click each bank to select/deselect it. Only the selected banks will be auto-populated.
5. Click Apply to auto-populate the selected parameters in the selected banks. To cancel the operation instead, close the Auto Populate window.
For ranges of notes, you must set a starting note and scale. For ranges of numbers, you must set a starting number and whether the values will increase or decrease across the bank(s). These types of parameters are described below.
When the Type is set to Note (for pads), select the starting note (of a scale) by clicking the Scale drop-down menu, selecting a scale, and then doing either of the following:
• Click the Start drop-down menu, and select the desired MIDI note value (C-1 – G9). The field next to it will change accordingly.
• Click the Start field, delete the current number (if necessary), type a new number (0–127), and then press Enter on your computer keyboard. The drop-down menu next to it will change accordingly.
    18

   When the Type is set to Program or Program Bank (for pads), select the starting program number by doing the following:
1. Click the Order drop-down menu, and select whether you want the numbers to increase (Ascending) or decrease (Descending) across the bank(s) of controls.
2. Click the Start field, delete the current number (if necessary), type a new number (0–127), and then press Enter on your computer keyboard.
When the Type is set to CC or Inc/Dec2 (for knobs only), select the starting CC number by doing the following:
1. Click the Order drop-down menu, and select whether you want the numbers to increase (Ascending) or decrease (Descending) across the bank(s) of controls.
2. Click the Start field, delete the current number (if necessary), type a new number (0–127), and then press Enter on your computer keyboard.
When the Type is set to Inc/Dec 1 (for knobs only), select the starting NRPN number by doing the following:
1. Click the Order drop-down menu, and select whether you want the numbers to increase (Ascending) or decrease (Descending) across the bank(s) of controls.
2. Click the Start field, delete the current number (if necessary), type a new number (0–16383), and then press Enter on your computer keyboard. Alternatively, do the same for the MSB and LSB fields (0–127).
  19

   Send Multiple Presets
You can send multiple Presets to your connected MPD218 simultaneously rather than sending just one at a time.
To send multiple Presets to your connected MPD218:
1. Click the Tools menu and select Send Multiple Presets.
2. In the Batch Send Presets window that appears, select which Presets you want to send by doing any of the following:
• Click a slot’s Browse button and then select the Preset file from your computer.
• Click and drag MPD218 Editor’s graphical user interface onto the desired slot.
• Click and drag an MPD218 Preset file from your computer onto the desired slot.
• Click and drag a folder containing multiple MPD218 Preset files from your computer onto the desired slot. (The selected slot and the ones below it will be “populated” with the Preset files in that folder and its subfolders.)
To remove a previously selected Preset from the list, click its X button.
To cancel, simply close the Send Preset window.
3. Click Send to confirm. Sending Presets will overwrite the corresponding Preset numbers
on your MPD218. If you did not select a Preset to send, that Preset will not be overwritten.
4. When you’re done, close the Send Preset window.
 20

   Software Menus
This chapter is a description of the available options in the menus at the top of the window.
File
New: Select this to open an additional MPD218 Editor window. Alternatively, press Ctrl+N (Windows) or+N (Mac OS X).
Open Preset: Select this to locate and load a Preset file (.mpd218) on your computer to the MPD218 Editor. Alternatively, press Ctrl+O (Windows) or +O (Mac OS X).
Close Window: Select this to close the MPD218 Editor window. Alternatively, press Ctrl+W (Windows) or+W (Mac OS X).
Save: Select this to save the MPD218 Editor’s current settings to your computer as a Preset file (.mpd218). Alternatively, press Ctrl+S (Windows) or +S (Mac OS X).
Save As: Select this to save the MPD218 Editor’s current settings to your computer as a Preset file (.mpd218) with a different file name.
Load From Hardware: Select this to import the current settings from your connected MPD218 into the MPD218 Editor.
Send To Hardware: Select this to export the current settings from the MPD218 Editor to your connected MPD218.
 21

  MIDI Setup: Select this option to open the Device Setup window.
If your MPD218 is connected to your computer, MPD218 and its MIDI ports will appear in both the Input and Output fields. We recommend selecting its MIDI port in each field. This will let you use the MPD218 Editor while simultaneously using MPD218 with your digital audio workstation (DAW).
• Windows: Set both Input and Output to MPD218.
• Mac OS X: Set both Input and Output to MPD218 Port A.
If your MPD218 is not connected to your computer, it will not be available in the Input and Output fields. This means that you cannot send Presets to it or load (get) Presets from it, but you can still use the MPD218 Editor to edit and save Presets on your computer.
Click OK to apply your selection and close the window. Alternatively, click Cancel to close the window without applying the selection, or click Apply to apply the selection without closing the window.
MIDI Setup for Windows. MIDI Setup for Mac OS X.
Quit: Select this to close the MPD218 Editor. Alternatively, press Ctrl+Q (Windows) or +Q (Mac OS X).
Mac OS X users: This option is in the MPD218 Editor menu.
   22

   Tools
Auto Populate Tool: Select this to open the Auto Populate window. See Other Functions > Auto-Populate Tool to learn how this feature works.
Send Multiple Presets: Select this to send multiple presets simultaneously to your connected MPD218. See Other Functions > Send Multiple Presets to learn how this feature works.
Window
Minimize Window: Select this to minimize the MPD218 Editor. Alternatively, press Ctrl+M (Windows) or+M (Mac OS X).
Bring to Front: Select this to place the MPD218 Editor above all other open application windows.
Help
Open User Guide: Select this to open this User Guide.
About: Select this to view information about this version of the MPD218 Editor. Mac OS X users: This option is in the MPD218 Editor menu.
   23

  
Trademarks and Licenses
Akai Professional is a trademark of inMusic Brands, Inc., registered in the U.S. and other countries.
Mac and OS X are trademarks of Apple Inc., registered in the U.S. and other countries.
Windows is a registered trademark of Microsoft Corporation in the United States and other countries.
All other product or company names are trademarks or registered trademarks of their respective owners.