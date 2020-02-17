import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { selectUser, fetchUserAndRepos } from '../../redux/Actions';
import SearchField from '../../components/SearchField';
import User from '../../components/User';

const { Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(user) {
        const { dispatch } = this.props;
        dispatch(selectUser(user));
        dispatch(fetchUserAndRepos(user));
    }

    render() {
        const { currentUser, currentUserData, userRepos } = this.props;
        const { userData } = currentUserData;
        return (
            <Layout>
                <Content style={{ padding: '0 50px', minHeight: '650px', textAlign: 'center' }}>
                    <SearchField onSubmit={this.handleSubmit} />
                    {currentUserData.isFetching && <h2>Loading...</h2>}
                    {!currentUserData.isFetching &&
                        userData.message && (
                            <div>
                                <h2>{userData.message}</h2>
                                <p>{userData.documentation_url}</p>
                            </div>
                        )}
                    {currentUser !== '' &&
                        !userData.message &&
                        !currentUserData.isFetching && (
                            <User
                                currentUserData={currentUserData}
                                userRepos={userRepos}
                            />
                        )}
                </Content>
            </Layout>
        );
    }
}

App.propTypes = {
    currentUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { currentUser, currentUserData, userRepos } = state;
    return {
        currentUser,
        currentUserData,
        userRepos,
    };
}

export default connect(mapStateToProps)(App);
