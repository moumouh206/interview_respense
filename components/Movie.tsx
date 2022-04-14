import { Dialog, Transition } from '@headlessui/react';
import { ThumbDownIcon, ThumbUpIcon, XIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  dislikeMovie,
  likeMovie,
  deleteMovie,
} from 'redux/actions/moviesActions';

export default function Movie(props) {
  const { movie } = props;
  const {
    id,
    title,
    category,
    Poster,
    likes,
    dislikes,
    liked = false,
    disliked = false,
  } = movie;
  const [isOpen, setIsOpen] = useState(false);
  const [likedByUser, setLikedByUser] = useState(liked);
  const [dislikedByUser, setDislikedByUser] = useState(disliked);

  const dispatch = useDispatch();
  // like the movie in the state
  const like = () => {
    if (likedByUser === false || likedByUser === null) {
      setLikedByUser(true);
      setDislikedByUser(false);
      dispatch(likeMovie(id));
    } else {
      setLikedByUser(false);
      setDislikedByUser(false);
      dispatch(likeMovie(id));
    }
  };

  // dislike the movie in the state
  const dislike = () => {
    if (dislikedByUser === false || dislikedByUser === null) {
      setDislikedByUser(true);
      setLikedByUser(false);
      dispatch(dislikeMovie(id));
    } else {
      setDislikedByUser(false);
      setLikedByUser(false);
      dispatch(dislikeMovie(id));
    }
  };

  // delete the movie in the state
  const deleteM = () => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="w-full  rounded-lg mb-4">
      <div
        key={id}
        className="flex items-start space-x-3 bg-white shadow-md rounded-md relative"
      >
        <img src={Poster} alt="Poster" className="flex-none w-28 relative" />
        <div className="flex flex-col items-start justify-start">
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center px-1 py-1 w-7 h-7 font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 absolute top-2 right-2"
              onClick={() => setIsOpen(true)}
            >
              <XIcon className="h-5 " />
            </button>
          </div>
          <h2 className=" font-bold mt-4">{title}</h2>
          <p className="text-gray-400 text-sm">
            <b>Categorie:</b> {category}
          </p>
          <div className="flex items-center space-x-3 mt-8 absolute bottom-4">
            <button
              type="button"
              onClick={like}
              className="flex items-center space-x-2 py-2 px-2 bg-gray-200 rounded-md cursor-pointer"
            >
              <ThumbUpIcon
                className={`w-5 h-5 text-gray-400 ${
                  likedByUser ? 'text-green-500' : ''
                }`}
              />
              <span className="text-gray-500 text-sm">{likes}</span>
            </button>
            <button
              type="button"
              onClick={dislike}
              className="flex items-center space-x-2 py-2 px-2 bg-gray-200 rounded-md cursor-pointer"
            >
              <ThumbDownIcon
                className={`w-5 h-5 text-gray-400 ${
                  dislikedByUser ? 'text-red-500' : ''
                }`}
              />
              <span className="text-gray-500 text-sm">{dislikes}</span>
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-purple-100 opacity-75 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full relative max-w-2xl py-0 px-6 my-2 overflow-hidden text-left align-middle transition-all transform bg-white  rounded-2xl">
                <div className="text-color-6 text-left">
                  <div>
                    <h1 className="text-lg mt-5 font-bold">
                      Confirmation de supprission
                    </h1>
                    <p className="text-sm mb-10">
                      voullez vous vraimenet supprimer ce film ?
                    </p>

                    <div className="w-full">
                      <button
                        type="button"
                        className="bg-gray-100 text-gray-500 font-light py-2 px-4 rounded-md hover:bg-color-1-2 hover:text-color-6"
                        onClick={() => setIsOpen(false)}
                      >
                        Annuler
                      </button>
                      <button
                        type="button"
                        className="bg-red-500 text-white font-normal py-2 px-4 ml-5 rounded-md hover:bg-color-1-4 hover:text-color-6 "
                        onClick={deleteM}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-2 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 absolute top-4 right-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <XIcon className="h-5 " />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-purple-200 opacity-75" />

          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
            Deactivate account
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500">
            This will permanently deactivate your account
          </Dialog.Description>

          <p className="text-sm text-gray-500">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex justify-center px-4 py-2 mr-5 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Supprimer
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Annuler
          </button>
        </div>
      </Dialog> */}
    </div>
  );
}
