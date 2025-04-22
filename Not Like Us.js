const lyrics = [
        { text: "We are not the same, I am too real.", pitch: 1.0, speed: 1.2 },
        { text: "I'm cut from a cloth that's been ripped, you feel?", pitch: 0.9, speed: 1.3 },
        { text: "Everything I touch turns gold, it's skill.", pitch: 1.1, speed: 1.1 },
        { text: "They envy the fire, but can't match the will.", pitch: 1.2, speed: 1.4 },
        { text: "Not like us, not like us!", pitch: 1.3, speed: 1.5 },
        { text: "They can't vibe like us!", pitch: 0.8, speed: 1.6 },
        { text: "The world is mine, no discussion, trust.", pitch: 1.0, speed: 1.2 }
    ];
// Create DroidScript app
function OnStart() {
		//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
	AddUserControls();
    // Initialize TextToSpeech
    app.TextToSpeech("Let's start singing Kendrick Lamar's lyrics!", 1.0, 1.2);

    

    // Sing all lyrics
    SingAllLyrics();

    // Play background music
    //app.PlayAudio("path/to/your/background/music.mp3", true); // Loop the background music
}

// Function to sing all lyrics
async function SingAllLyrics() {
    await lyrics.forEach(lyric => {
        SingLyric(lyric.text, lyric.pitch, lyric.speed);
        //app.Wait(500); // Pause after each lyric
    });
}

// Function to sing a lyric with pitch and speed
async function SingLyric(text, pitch, speed) {
    await app.TextToSpeech(text, pitch, speed);
    //app.Wait(500); // Pause after each lyric
}

// Additional features
function AddUserControls() {
    // Implement user controls for playback
    // Example: buttons to pause, skip, or repeat lyrics
    pause = app.AddButton(lay, "Pause", 0.33, -1);
    pause.SetOnTouch( ()=>{app.TextToSpeech("Paused", 1.0, 1.0);});
/*
    app.AddButton("Skip", function() {
        // Logic to skip to the next lyric
        app.TextToSpeech("Skipping to the next line.", 1.0, 1.0);
    });

    app.AddButton("Repeat", function() {
        // Logic to repeat the current lyric
        app.TextToSpeech("Repeating the line.", 1.0, 1.0);
    });*/
}

// Call the function to add user controls
