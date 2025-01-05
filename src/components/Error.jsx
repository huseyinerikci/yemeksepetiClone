function Error({ info, retry }) {
  return (
    <div>
      <div className="bg-red-100 mt-32 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir sorun oluştu</p>
        <p className="font-semibold mt-5">{info}</p>
      </div>
      {retry && (
        <div className="flex justify-center my-10">
          <button
            className="border py-2 px-4 rounded-md hover:bg-zinc-100 transition"
            onClick={retry}
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
}

export default Error;
