import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import CreatePlaylistFormContainer from '../home/sidebar/create_playlist/create_playlist_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        // case 'login':
        //     component = <LoginFormContainer />;
        //     break;
        // case 'signup':
        //     component = <SignupFormContainer />;
        //     break;
        case 'playlist':
            component = <CreatePlaylistFormContainer />; 
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
