class Github {
  async fetch(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    response = await response.json();
    return {
      id: response.id,
      image: response.avatar_url,
      name: response.login,
      description: response.bio
    }
  }
}

export const github = new Github();