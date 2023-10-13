import './Settings.css'

const Settings = () => {
  return (
    <div className='setting'>
      <p>Your Settings</p>
      <from>
        <input type="text" value="https://api.realworld.io/images/smiley-cyrus.jpeg"/>
        <input type="text"/>
        <input placeholder="short bio about you " style={{height:"100px"}}/>
        <input type="text"/>
        <input type="text" placeholder='New Password'/>
      </from>
      <button className='btn1'> Update Settings</button>
      
      <button className='btn2'>Or Click Here To Logout</button>
    </div>
  )
}

export default Settings
