// this Component display the user repo commits 
import React from 'react'

function UserRepoCommits(props) {
    return (
        <ul>
            {props.data.map(({ author, commit }) => (
                <li>
                    <h3><a className='user-data-login' >{author.login}</a></h3>
                    <h4> {commit.message} </h4>
                </li>
            ))}
        </ul>
    )
}

class SelectedRepoCommits extends React.Component {
    render() {

        let user_repo_commits_list = <UserRepoCommits data={this.props.data} />

        return user_repo_commits_list
        
    }
}
export default SelectedRepoCommits