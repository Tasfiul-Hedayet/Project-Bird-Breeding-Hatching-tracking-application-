// Hatch Tracker:
//
// ·        Hatch Number (should increment)
// ·        Identification (option to increment or input, check for duplicates)
// ·        Species
// ·        Breed
// ·        Cock Identifer (cross reference to Bird Tracker Database)
// ·        Hen Identifer (cross reference to Bird Tracker Database)
// ·        Set (Date)
// ·        Lockdown (date)
// ·        Hatch (date)
// ·        # Set
// ·        #Fertile
// ·        # Hatch

import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div class="logo">BizManage CRM </div>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <nav class="nav-bar">
          <ul>
            <li>
              <Link href="" class="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/bird">Bird</Link>
            </li>
            <li>
              <Link href="/hatch">Hatch</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
