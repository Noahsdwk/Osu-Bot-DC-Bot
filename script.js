// Arrays to store the active tournaments and player scores
let activeTournaments = [];
let playerScores = [];
let beatmapLinks = []; // Array to store beatmap links

// Function to display active tournaments
function displayActiveTournaments() {
    let tournamentContainer = document.getElementById('active-tournaments');
    
    // Clear current content
    tournamentContainer.innerHTML = '';

    if (activeTournaments.length === 0) {
        // If no tournaments, show a message
        tournamentContainer.innerHTML = '<p>Zurzeit gibt es keine aktiven Turniere.</p>';
    } else {
        // If tournaments exist, create a list
        activeTournaments.forEach(tournament => {
            let tournamentElement = document.createElement('div');
            tournamentElement.classList.add('tournament');
            tournamentElement.innerHTML = `<strong>${tournament.name}</strong> - Start: ${tournament.startDate}, Ende: ${tournament.endDate}`;
            tournamentContainer.appendChild(tournamentElement);
        });
    }
}

// Function to display player scores
function displayPlayerScores() {
    let scoresContainer = document.getElementById('player-scores');
    
    // Clear current content
    scoresContainer.innerHTML = '';

    if (playerScores.length === 0) {
        // If no scores, show a message
        scoresContainer.innerHTML = '<p>Zurzeit keine Punktstände verfügbar.</p>';
    } else {
        // If player scores exist, create a list
        playerScores.forEach(player => {
            let scoreElement = document.createElement('div');
            scoreElement.classList.add('player');
            scoreElement.innerHTML = `${player.name}: ${player.score} Punkte`;
            scoresContainer.appendChild(scoreElement);
        });
    }
}

// Add a beatmap link to the list
function addBeatmapLink() {
    let mapLink = prompt("Bitte gebe den Beatmap-Link ein:");
    
    if (mapLink) {
        // Add link to beatmapLinks array
        beatmapLinks.push(mapLink);
        
        // Update the display
        displayBeatmapLinks();
    }
}

// Display beatmap links in the list
function displayBeatmapLinks() {
    let beatmapList = document.getElementById('beatmap-list');
    
    // Clear current content
    beatmapList.innerHTML = '';

    // If no beatmap links exist, show a message
    if (beatmapLinks.length === 0) {
        beatmapList.innerHTML = '<p>Keine Beatmaps hinzugefügt.</p>';
    } else {
        // If beatmap links exist, display them in the list
        beatmapLinks.forEach(link => {
            let listItem = document.createElement('li');
            listItem.textContent = link;
            beatmapList.appendChild(listItem);
        });
    }
}

// Add event listener for the "Plus" button to add a beatmap link
document.getElementById('add-map').addEventListener('click', addBeatmapLink);

// Add event listener to submit button for setting up a tournament
document.getElementById('submit').addEventListener('click', function() {
    // Collect tournament data
    let tournamentName = document.getElementById('tournament-name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    
    // Validate inputs
    if (!tournamentName || !startDate || !endDate || beatmapLinks.length === 0) {
        alert("Bitte fülle alle erforderlichen Felder aus und füge mindestens eine Beatmap hinzu.");
        return;
    }

    // Create a new tournament object
    let newTournament = {
        name: tournamentName,
        startDate: startDate,
        endDate: endDate, 
    };

    // Add new tournament to the active tournaments array
    activeTournaments.push(newTournament);

    // Display updated tournaments list
    displayActiveTournaments();
    displayBeatmapLinks();
    

    // Example player scores (these would normally come from actual gameplay)
    playerScores = [
        { name: 'Spieler 1', score: 1000 },
        { name: 'Spieler 2', score: 850 },
        { name: 'Spieler 3', score: 900 }
    ];

    // Display updated player scores
    displayPlayerScores();

    // Confirmation message
    alert("Turnier erfolgreich eingerichtet!");
});

// Initial display when page loads
displayActiveTournaments();
displayPlayerScores();
displayBeatmapLinks();

alert("was ist diese beatmap")