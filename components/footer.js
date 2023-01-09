export default function Footer() {
  let date =  new Date().getFullYear();
  return (
    <footer className="pt-20 mt-auto">
      <span className="flex justify-center py-5 text-sm sm:text-center">
        ©{date}&nbsp;
        <a href="https://briang.xyz/" className="hover:underline">
          Brian Geertsma
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
