export default function Favourite() {
  return false ? (
    <div>your favourite</div>
  ) : (
    <div className="text-center p-2 font-rubik">
      you have no favourite yet, sign in to add or see favourite
    </div>
  );
}
