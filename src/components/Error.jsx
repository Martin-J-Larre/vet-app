export const Error = ({ children }) => {
  return (
    <div class="text-center border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 font-semibold">
      <p>{children}</p>
    </div>
  );
};
