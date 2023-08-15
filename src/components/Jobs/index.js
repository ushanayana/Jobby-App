import {Component} from 'react'

import {AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const SalaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40LPA and above',
  },
]

class Jobs extends Component {
  state = {
    profileData: {},
  }

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
  }

  onSuccessProfileView = () => {
    const {profileData} = this.state
    const {name, profileImageUrl, shortBio} = profileData
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt="avatar" />
        <h1 className="profile-name">{name}</h1>
        <p className="desc">{shortBio}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="side-container">{this.onSuccessProfileView()}</div>
      </div>
    )
  }
}
export default Jobs
