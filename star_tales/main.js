import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scale: {
      mode: Phaser.Scale.RESIZE,
      parent: 'app',
      width: '100%',
      height: '100%'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets
}

function create() {
    // Create game objects
    this.scale.on('resize', resize, this);

    //Display the login form within the Phaser scene
    let element = this.add.dom(window.innerWidth / 2, window.innerHeight / 2, document.getElementById('login-form'));
    element.setPerspective(800);
    // show the login form
    document.getElementById('login-form').style.display = 'block';

    // Handle login form submission
    document.getElementById('login-button').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Implement your logic to handle the login, such as sending the credentials to your server
        console.log(username, password);
        // optionally, hide form again or transition to another scene upon successful login
    });
}

function resize(gameSize) {
  // For responsiveness
  const { width, height } = gameSize;
  this.cameras.resize(width, height);

  // Reposition the login form if necessary
  let loginForm = this.children.getByName('loginForm');
  if (loginForm) {
    loginForm.setPosition(width / 2, height / 2);
  }

}

function update() {
    // Game loop
}
