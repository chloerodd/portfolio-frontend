function About({ about }) {
  return (
    <div>
      <h1>{about.name}</h1>
      <h2>Full-Stack Engineer</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      <p>Skills: MERN, Mongoose, HTML, CSS, Javascript</p>
      <img src={about.headshot}/>
    </div>
  );
}

export default About;