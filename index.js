/*jshint esversion: 6 */
function fetchUserInfo(userId) {
	fetch(`https://api.github.com/users/${userId}`)
		.then(response => {
				console.log(response.status);
			if (!response.ok) {
			} else {
				response.json().then(userInfo => {
					console.log(userInfo);
				});
			}
		}).catch(error => {
				console.error("ネットワークエラー", error);
		});
}
