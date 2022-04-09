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
  const { id, title, category, Poster, likes, dislikes } = movie;
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  // like the movie in the state
  const like = () => {
    dispatch(likeMovie(id));
  };

  // dislike the movie in the state
  const dislike = () => {
    dispatch(dislikeMovie(id));
  };

  // delete the movie in the state
  const deleteM = () => {
    dispatch(deleteMovie(id));
  };

  return (
    <div className="w-full  rounded-lg mb-4">
      <div
        key={id}
        className="flex items-center space-x-3 bg-white shadow-md rounded-md relative"
      >
        <img src={Poster} alt="Poster" className="flex-none w-28 relative" />
        <div className="flex flex-col">
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
          <div className="flex items-center space-x-3 mt-10">
            <button
              type="button"
              onClick={like}
              className="flex items-center space-x-2 py-2 px-2 bg-gray-200 rounded-md cursor-pointer"
            >
              <ThumbUpIcon className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500 text-sm">{likes}</span>
            </button>
            <button
              type="button"
              onClick={dislike}
              className="flex items-center space-x-2 py-2 px-2 bg-gray-200 rounded-md cursor-pointer"
            >
              <ThumbDownIcon className="w-5 h-5 text-gray-400" />
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
              <Dialog.Overlay className="fixed inset-0 bg-color-1-1 opacity-75 " />
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
                      Rédiger un commentaire publique
                    </h1>
                    <p className="text-sm">
                      Poser des question ou demander plus d&apos;information a{' '}
                    </p>

                    <div className="w-full">
                      <button
                        type="button"
                        className="bg-color-1-1 text-color-6 font-light py-2 px-4 rounded-md hover:bg-color-1-2 hover:text-color-6"
                        onClick={() => setIsOpen(false)}
                      >
                        Annuler
                      </button>
                      <button
                        type="button"
                        className="bg-purple-500 text-white font-normal py-2 px-4 ml-5 rounded-md hover:bg-color-1-4 hover:text-color-6 "
                        onClick={deleteM}
                      >
                        Envoyer
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
    </div>
  );
}
