"use strict";

var React = require("react");

// var UserName = React.createClass({
// 	render: function() {
// 		var name = "anon";
// 		return (
// 			<h1>{this.props.name}</h1>
// 		);
// 	}
// });

// var UserStatus = React.createClass({
// 	render: function() {
// 		return (
// 			<p>{this.props.content}</p>
// 		);
// 	}
// });

// var LikeButton = React.createClass({
// 	getDefaultProps: function() {
// 		return {
// 			liked: false
// 		};
// 	},
// 	render: function() {
// 		var buttonClass = "like";

// 		if (this.props.liked) {
// 			buttonClass += " yup";
// 		}

// 		return (
// 			<button className={buttonClass}>
// 				S
// 			</button>
// 		);
// 	}
// });

// // React.render(<UserName />, document.getElementById("content"));


// var User = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="app">
// 				<UserName name="anon" />
// 				<LikeButton liked={true} />
// 				<UserStatus content="something about the election" />
// 			</div>
// 		);
// 	}
// });




// React.render(<User />, document.getElementById("content"));


// var React = require("react");
// var PropTypes = React.PropTypes;
// var rootEl = document.getElementById("content");

// var GiveMeAName = React.createClass({

// 	propTypes: {
// 		name: PropTypes.string
// 	},

// 	render: function () {
// 		return <h1>{this.props.name}</h1>;
// 	}
// });

// var IHaveAName = React.createClass({
// 	render: function() {
// 		return (
// 			<GiveMeAName name="Claire" />
// 		);
// 	}
// });

// React.render(
// 	<IHaveAName />,
// 	rootEl
// );


// var LikeButton = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			liked: false
// 		};
// 	},
// 	clickHandler: function(e) {
// 		this.setState({
// 			liked: !this.state.liked
// 		});
// 	},
// 	render: function() {
// 		var buttonClass = "like";

// 		if (this.state.liked) {
// 			buttonClass += " yup";
// 		}

// 		return (
// 			<button className={buttonClass} onClick={this.clickHandler}>
// 				{this.state.liked ? "-" : "+"}
// 			</button>
// 		);
// 	}
// });

// React.render(<LikeButton />, document.getElementById("content"));


var UserName = React.createClass({
	render: function() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
});

var UserStatus = React.createClass({
	render: function() {
		return (
			<p>{this.props.content + (this.props.liked ? " :)" : " :(")}</p>
		);
	}
});

var LikeButton = React.createClass({

	clickHandler: function(e) {
		this.props.toggleLike();
	},

	render: function() {
		var buttonClass = "like";

		if (this.props.liked) {
			buttonClass += " yup";
		}

		return (
			<button className={buttonClass} onClick={this.clickHandler}>
				{this.props.liked ? "-" : "+"}
			</button>
		);
	}
});

var User = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },

  toggleLike: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  render: function() {
    return (
      <div className="app">
        <UserName name="anon" />
        <LikeButton liked={this.state.liked} toggleLike={this.toggleLike} />
        <UserStatus liked={this.state.liked} content="something about the election" />
      </div>
    );
  }
});

React.render(<User />, document.getElementById("content"));