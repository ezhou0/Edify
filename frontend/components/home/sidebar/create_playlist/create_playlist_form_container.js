import { connect } from 'react-redux';
//import { clearCardErrors, createCard } from '../../actions/card_actions';
//import CreateCardForm from './create_card_form';
import CreatePlaylistForm from './create_playlist_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
       // errors: Object.values(state.errors.cards),
       // formType: 'createPlaylist'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       // createCard: (card) => dispatch(createCard(card)),
        // clearCardErrors: () => dispatch(clearCardErrors()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistForm);