#Trading Faces

##Description
Trading Faces is a game of silly selfies. Users challenge a friend to recreate a silly face; once both users have recreated a silly face, the faces are analyzed for similarities. The best mimic wins!

##Features
This app is fully decoupled, including decoupled Oauth through Facebook. The game emphasizes a single-page experience and a carefully crafted game flow which hides game logic to emphasize a positive user experience.

##Technologies Used
  * Back End: Rails API, ActiveRecord, PostgreSQL
  * Front End: JavaScript, jQuery, Handlebars, HTML, CSS, Bootstrap
  * APIs: Face++, Cloudinary
  * OAuth: Facebook

##Game Rules

###To Start a new Game:
  1. Click 'New Game'
  2. Select a friend to challenge
  3. Make your best face and click 'Save Photo'
  4. Wait for your friend to respond!

###To Respond to a Challenge:
  1. Navigate to 'Current Games'
  2. Click 'Respond'
  3. You will see your friend's photo for 5 seconds. Try to recreate it!
  4. The faces are compared, and a rating is generated based on how accurately you matched their   face
  6. Now it's your turn to send them a challenge!

###Finally:
  1. After two rounds of play, a winner has been declared!
  2. Click 'Old Games' to see all of your finished games

##Challenges We Faced
One challenge of Trading Faces was using the Face++ API to compare & score two faces for similarities. This is a crucial step, as it allows for an objective score on the similarity of the two faces. This was a little challenging to implement, because the intended use of the Face++ API is to detect the same face. We solved this problem by limiting game play to be between the same two users per each game; thus, users consistently has the same disadvantages against each other within the same game.

Another challenge for this project was implementing decoupled OAuth. It took us a full day to complete, but it was rewarding in the end. We learned that using the Rails API was the root of the problem; sessions are not included in this implementation of Rails, and we had to manually implement the Rails Sessions module. In the future, we will be more judicious when considering a decoupled approach in the future, as it was not necessary for the scope of the project.

##Next Steps
We hope to implement more complex game flow, potentially with more rounds or with games between more people. Part of this would require implementing user voting to determine the best mimic.

Another big step is making this app available on additional platforms. We are considering deploying this game as a mobile app, and we're interested in using the new Facebook Messenger platform. At the very least, we intend to make the site mobile-responsive.

##The Team
Team Lead: Evan Hughes
Team Members: Andrew Scnieder, Cari Westbrook, Zac Barnes