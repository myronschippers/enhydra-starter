import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

import './SplashPage.css';

class SplashPage extends Component {
    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return(
            <div className="grid">
                <div className="grid-col grid-col_8">
                    <div className="vr vr_2x">
                        <img
                            src="/images/hanging-in-there.jpg"
                            alt="Teddy Bear hanging on clothes line."
                        />
                    </div>
                    <h2>Welcome to My App!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat libero nec mauris dignissim accumsan. Sed malesuada suscipit erat, eu vulputate ante aliquam ut. Nunc vel semper ante, nec sodales nibh. Morbi molestie viverra placerat. Sed massa dolor, vehicula ut porttitor a, luctus vitae risus. Sed sed rutrum enim. Sed quis dolor accumsan, pellentesque dolor non, dictum lacus. Phasellus dictum luctus dolor et feugiat. Vestibulum egestas orci in feugiat venenatis. Integer congue metus et metus fringilla, ut ultricies massa rhoncus. Etiam id volutpat mi.</p>
                    <p>Etiam sit amet placerat nulla. Suspendisse accumsan eros sed faucibus venenatis. Cras at mi et eros euismod vestibulum eu sit amet ex. Cras pretium porttitor libero vitae commodo. Duis fringilla lorem vitae pretium accumsan. Aenean mattis eu libero vitae pellentesque. Donec fermentum semper mauris, sed ullamcorper risus consequat sed. Maecenas quis tempus libero.</p>
                </div>
                <div className="grid-col grid-col_4">
                    <h3>Mastering the App</h3>
                    <ul>
                        <li>Do this thing.</li>
                        <li>Try out feature "X".</li>
                        <li>Tell a friend about your experience.</li>
                    </ul>
                    <p>Login to access your own account.</p>
                    <button
                        className="btn btn_sizeFull"
                        onClick={this.onLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(SplashPage);
