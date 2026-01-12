"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjcetTag from "./ProjcetTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ProjectData = [
    {
      id: 1,
      title: "Green Syria Dashboard",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            Plant Stores, Volunteer and Works Management Dashboard
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A comprehensive web-based dashboard designed to facilitate the
              management of environmental and volunteer related activities
              across various plant stores and institutions.
            </li>
            <li>
              This platform empowers admins and assistant admins to efficiently
              oversee content, volunteers, tree assignments, and institutional
              collaborations while ensuring an intuitive and secure user
              experience.
            </li>
            <li>
              The dashboard features a clean, responsive interface and
              role-based access control, allowing only designated users to
              perform sensitive actions such as editing data or viewing
              analytics.
            </li>
            <li>
              It streamlines workflows and promotes environmental initiatives
              through structured management tools.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            {/* <li>
              Service Showcase: The website highlights the company&apos;s range
              of design services in a visually engaging format.
            </li> */}
            <li>
              Role-Based Access Control: Admins have full control, including
              access to system statistics, assistant admin management, and
              institution handling, while assistant admins can manage content
              and volunteers.
            </li>
            <li>
              Content Management: Easily add, edit, or delete articles, article
              categories, volunteers, plant stores, and trees.
            </li>
            <li>
              Tree Assignment: Assign trees to volunteers and track their
              contributions.
            </li>
            <li>
              Request Management: View and process join requests from new users.
            </li>
            <li>
              Institutional Management: Admins can add and update institutions
              and track associated activities.
            </li>
            <li>
              Statistics Dashboard: Admin-only access to key insights and visual
              data for strategic decision-making.
            </li>
            <li>
              Responsive Design: Optimized for desktop and mobile screens to
              ensure accessibility from any device.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Powers the dynamic and interactive front-end interface.
            </li>
            <li>
              Tailwind CSS: Enables rapid UI development with utility-first
              responsive design.
            </li>
            <li>
              Zustand: Lightweight state management for improved scalability and
              performance.
            </li>
            <li>Axios: Simplifies API requests and data fetching.</li>
            <li>
              React Hook Form: Provides performant and accessible form handling.
            </li>
            <li>
              React Router DOM: Handles smooth, single-page application routing.
            </li>
            <li>
              React Icons: Enhances user experience with visually intuitive
              iconography.
            </li>
            <li>
              <p>Built-in React Hooks:</p>
              <p className="ml-16">
                useRef: For DOM access and form management.
              </p>
              <p className="ml-16">
                useState, useEffect, useMemo, useCallback: Manage lifecycle,
                state, and performance optimization.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring seamless role-based access and permissions without
              compromising security or usability.
            </li>
            <li>
              Maintaining smooth and error-free CRUD operations across a wide
              range of data types and user interactions.
            </li>
            <li>
              Creating a responsive and visually consistent UI using Tailwind
              while preserving accessibility and multilingual readiness.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Note:</p>
          <p className="px-2 mt-2 ml-2">
            Send me a Message if you want to test the project, I will send you
            password and a valid email for that
          </p>
        </div>
      ),
      image: "/images/projects/green_syria.png",
      tag: ["All", "Web", "protect"],
      // gitUrl: "https://github.com/moazTello/space_time",
      previewUrl: "https://eng-moaz-tello.github.io/green_syria/",
    },
    {
      id: 2,
      title: "Green Syria App",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Green Syria Mobile App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Green Syria is a role-based mobile application designed to foster
              environmental impact through a collaborative ecosystem involving
              users, volunteers, and plant stores. Built with React Native, the
              app streamlines the process of identifying areas in need of trees,
              assigning volunteers, and managing planting activities—empowering
              communities to actively contribute to urban greening.
            </li>
            <li>
              The platform supports seamless interaction between different
              roles, ensuring transparency, accountability, and engagement
              throughout the tree planting lifecycle.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>Multi-Role System</li>
            <li>
              <p>User (No Login Required):</p>
              <p className="ml-16 my-2">
                Can submit requests for tree planting by uploading images of
                locations that need trees (e.g., streets, sidewalks).
              </p>
              <p className="ml-16 my-2">
                Can browse categories of articles, read environmental articles,
                and view statistics about trees planted, submitted works,
                volunteers, and plant stores.
              </p>
              <p className="ml-16 my-2">
                Can submit join requests to become a volunteer or plant store.
              </p>
              <p className="ml-16 my-2">
                Access static informational pages: About, Policy, and Terms of
                Use.
              </p>
            </li>
            <li>
              <p>Volunteer (Login Required):</p>
              <p className="ml-16 my-2">
                View the tree list and assign trees to themselves.
              </p>
              <p className="ml-16 my-2">
                View assigned trees, update their status to &ldquo;done&ldquo;,
                or choose to accept or reject trees assigned by plant stores.
              </p>
              <p className="ml-16 my-2">
                Access their profile, performance rating, and full history of
                actions and completed tasks.
              </p>
            </li>
            <li>
              <p>Plant Store (Login Required):</p>
              <p className="ml-16 my-2">
                Add new trees to the waiting list or assign them directly to a
                volunteer.
              </p>
              <p className="ml-16 my-2">
                Manage and track all added trees, including ones specifically
                linked to their store.
              </p>
              <p className="ml-16 my-2">
                Access a profile page with their rating and a detailed log of
                all past activity.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native (Expo): Cross-platform app development for iOS and
              Android with native performance.
            </li>
            <li>Expo Router: Simplifies and scales navigation structure.</li>
            <li>
              Zustand: Lightweight, scalable state management for fast
              performance.
            </li>
            <li>Axios: Handles API requests securely and efficiently.</li>
            <li>
              NativeWind (Tailwind for React Native): Enables clean, responsive
              UI design with utility-first styling.
            </li>
            <li>
              React Native Appwrite: Manages authentication, databases, and
              role-based access control.
            </li>
            <li>Expo Image Picker: Allows users to upload images with ease.</li>
            <li>
              Core React Hooks: useState, useEffect, useMemo, useCallback, and
              useRef for optimal control, performance, and UI logic.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Core Workflows & Functionality:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              🌱 User Flow: Submit tree work requests → Upload location images →
              View articles and platform stats.
            </li>
            <li>
              🤝 Volunteer Flow: Browse tree opportunities → Assign tree →
              Accept/reject → Mark as done → Track progress.
            </li>
            <li>
              🏪 Plant Store Flow: Add/assign trees → Monitor status → Track
              actions → Engage with volunteers.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Implementing multi-role login and access control while keeping the
              UI clean and intuitive.
            </li>
            <li>
              Building a real-time tree assignment system that allows both
              manual and self-assignment.
            </li>
            <li>
              Managing image uploads, status tracking, and action history per
              role.
            </li>
            <li>
              Supporting guest users with meaningful engagement while
              incentivizing registration.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Note:</p>
          <p className="px-2 mt-2 ml-2">
            you can test the app and the dashboard just send me a message to
            send you a valid email and password for that
          </p>
        </div>
      ),
      image: "/images/projects/green_syria_app.png",
      tag: ["All", "Mobile", "Download"],
      // gitUrl: "https://github.com/moazTello/space_time",
      // previewUrl: "https://eng-moaz-tello.github.io/green_syria/",
      fileName: "green_syria_test_server.apk",
    },
    {
      id: 3,
      title: "Rasheed Dashboard",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            Organizations Management System
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A powerful web-based platform designed to streamline the oversight
              and coordination of organizations and their projects.
            </li>
            <li>
              This system enables centralized administration while also
              empowering each organization with the tools needed to manage their
              own initiatives, address user feedback, and evaluate public
              engagement through surveys and suggestions.
            </li>
            <li>
              With an intuitive interface, role-based access, and real-time
              updates, the platform supports transparent project tracking and
              fosters collaborative development between organizations and
              communities.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              <p>Role-Based Access:</p>
              <p className="ml-16 my-2">
                Admin: Full control to manage all organizations and their
                projects, as well as view overall system statistics.
              </p>
              <p className="ml-16 my-2">
                Organizations: Access to manage their own projects, view
                user-submitted feedback, and analyze survey results.
              </p>
            </li>
            <li>
              <p>Organization & Project Management:</p>
              <p className="ml-16 my-2">
                Admins and organization accounts can add, edit, and delete
                organizations or projects.
              </p>
              <p className="ml-16 my-2">
                View detailed information about each project and organization in
                an organized layout.
              </p>
            </li>
            <li>
              Feedback & Community Engagement: Organizations can view
              user-submitted problems, suggestions, and surveys specific to
              their projects, supporting responsive and people-centered
              development.
            </li>
            <li>
              Statistics Dashboard: Admins have access to visual insights and
              key metrics across all organizations and projects for informed
              decision-making.
            </li>
            <li>
              Responsive Interface: Seamlessly accessible across desktops,
              tablets, and mobile devices.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Powers the dynamic and interactive front-end interface.
            </li>
            <li>
              Tailwind CSS: Enables rapid UI development with utility-first
              responsive design.
            </li>
            <li>
              Zustand: Lightweight state management for improved scalability and
              performance.
            </li>
            <li>Axios: Simplifies API requests and data fetching.</li>
            <li>
              React Hook Form: Provides performant and accessible form handling.
            </li>
            <li>
              React Router DOM: Handles smooth, single-page application routing.
            </li>
            <li>
              React Icons: Enhances user experience with visually intuitive
              iconography.
            </li>
            <li>
              <p>Built-in React Hooks:</p>
              <p className="ml-16">
                useRef: For DOM access and form management.
              </p>
              <p className="ml-16">
                useState, useEffect, useMemo, useCallback: Manage lifecycle,
                state, and performance optimization.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Implementing secure, scalable role-based access that distinguishes
              admin and organization capabilities without complexity.
            </li>
            <li>
              Managing a dynamic flow of community feedback (problems,
              suggestions, and surveys) per project while maintaining clarity
              and organization.
            </li>
            <li>
              Ensuring high usability and accessibility across multiple roles
              and platforms.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Note:</p>
          <p className="px-2 mt-2 ml-2">
            Send me a Message if you want to test the project, I will send you
            password and a valid email for that
          </p>
        </div>
      ),
      image: "/images/projects/rasheed.png",
      tag: ["All", "Web", "protect"],
      // gitUrl: "https://github.com/moazTello/space_time",
      previewUrl: "https://eng-moaz-tello.github.io/rasheed/",
    },
    {
      id: 4,
      title: "Rasheed App",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Rasheed Mobile App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Rasheed is a user-centric mobile application built with React
              Native, designed to enhance transparency and community engagement
              between the public and various organizations.
            </li>
            <li>
              The app empowers users to actively participate in the development
              and improvement of public and private sector projects by
              submitting surveys, suggestions, and reports on encountered
              issues.
            </li>
            <li>
              Through a clean interface and streamlined interactions, Rasheed
              Connect bridges the gap between users and organizations, fostering
              accountability and collaborative growth.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              <p>🏛 Explore Organizations & Projects</p>
              <p className="ml-16 my-2">
                View a comprehensive list of registered organizations and their
                active projects.
              </p>
              <p className="ml-16 my-2">
                Access project details, status, and purpose to stay informed.
              </p>
            </li>
            <li>
              <p>🗳 User Interaction & Feedback</p>
              <p className="ml-16 my-2">
                Submit Surveys: Provide structured feedback for each project to
                support decision-making.
              </p>
              <p className="ml-16 my-2">
                Send Suggestions: Share ideas or improvements related to any
                organization or project.
              </p>
              <p className="ml-16 my-2">
                Report Problems: Alert organizations to issues with specific
                projects or operations, promoting real-time responsiveness.
              </p>
            </li>
            <li>
              <p>📚 Informational Access</p>
              <p className="ml-16 my-2">
                View the About section to understand the app&apos;s mission and
                goals.
              </p>
              <p className="ml-16 my-2">
                Browse Policy and Terms of Use pages for transparency and user
                trust.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native (Expo): Delivers a seamless and responsive user
              experience across mobile platforms.
            </li>
            <li>Expo Router: Ensures scalable and intuitive navigation.</li>
            <li>Zustand: Manages app state with simplicity and efficiency.</li>
            <li>Axios: Enables fast, secure communication with the backend.</li>
            <li>NativeWind: Powers modern and consistent UI styling.</li>
            <li>
              Appwrite (React Native): Handles user roles and secure data
              storage.
            </li>
            <li>
              React Hooks: useState, useEffect, useMemo, useRef, and useCallback
              used for optimal state and logic management.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Workflow Overview:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>🔍 Browse organizations and projects.</li>
            <li>📝 Submit surveys, suggestions, or problem reports.</li>
            <li>📄 Read platform policies and app information.</li>
          </ul>
          <p className="mt-4 text-slate-100">Impact & Purpose:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Encourages civic participation by giving users a voice in local
              and national projects.
            </li>
            <li>
              Provides organizations with valuable community insight through
              real-time feedback.
            </li>
            <li>
              Supports accountability and continuous improvement in project
              management and service delivery.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Note:</p>
          <p className="px-2 mt-2 ml-2">
            you can test the app and the dashboard just send me a message to
            send you a valid email and password for that
          </p>
        </div>
      ),
      image: "/images/projects/rasheed_app.png",
      tag: ["All", "Mobile", "Download"],
      // gitUrl: "https://github.com/moazTello/space_time",
      // previewUrl: "https://eng-moaz-tello.github.io/green_syria/",
      fileName: "rashed_test_server.apk",
    },
    {
      id: 5,
      title: "Falfilgy",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Restaurant Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to Show the Restaurant Meals Menu.
            </li>
            <li>
              The platform offers bilingual support Arabic and English and
              integrates electronic payment systems to provide users with a
              seamless and efficient booking experience.
            </li>
            <li>
              Users can easily search for available bus routes, select their
              preferred travel times, and secure their tickets online.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Availability: Users can view real-time Restaurant Meals
              Menu.
            </li>
            <li>
              Responsive Design: Optimized for various screen sizes and devices
              for easy access from anywhere.
            </li>
            <li>
              🛠 Tech Stack: Built with React.js, ensuring fast rendering, smooth
              performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              react-router-dom: Manages seamless navigation between pages.
            </li>
            <li>
              useState: Manage application lifecycle and performance
              optimizations.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/falafilgy.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/falafilgy",
      previewUrl: "https://eng-moaz-tello.github.io/falafilgy",
    },
    {
      id: 5,
      title: "Al-Mahaba",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Restaurant Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to Show the Restaurant Meals Menu.
            </li>
            <li>
              The platform offers bilingual support Arabic and English and
              integrates electronic payment systems to provide users with a
              seamless and efficient booking experience.
            </li>
            <li>
              Users can easily search for available bus routes, select their
              preferred travel times, and secure their tickets online.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Availability: Users can view real-time Restaurant Meals
              Menu.
            </li>
            <li>
              Responsive Design: Optimized for various screen sizes and devices
              for easy access from anywhere.
            </li>
            <li>
              🛠 Tech Stack: Built with React.js, ensuring fast rendering, smooth
              performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              react-router-dom: Manages seamless navigation between pages.
            </li>
            <li>
              useState: Manage application lifecycle and performance
              optimizations.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/al-mahaba.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/al_mahaba",
      previewUrl: "https://eng-moaz-tello.github.io/al_mahaba",
    },
    {
      id: 7,
      title: "WAYGO",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support Arabic and English and
              integrates electronic payment systems to provide users with a
              seamless and efficient booking experience.
            </li>
            <li>
              Users can easily search for available bus routes, select their
              preferred travel times, and secure their tickets online.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Bilingual Support: Full support for Arabic and English languages
              to accommodate a diverse user base.
            </li>
            <li>
              Secure Payments: Integrated electronic payment gateway for quick
              and secure transactions.
            </li>
            <li>
              Real-Time Availability: Users can view real-time bus schedules and
              seat availability.
            </li>
            <li>
              Responsive Design: Optimized for various screen sizes and devices
              for easy access from anywhere.
            </li>
            <li>
              🛠 Tech Stack: Built with React.js, ensuring fast rendering, smooth
              performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              useContext: Ensures efficient state management across components.
            </li>
            <li>
              Zustand: Lightweight state management for better scalability and
              performance.
            </li>
            <li>
              Firebase: Used for backend services, including data storage and
              authentication.
            </li>
            <li>Axios: Handles API requests efficiently.</li>
            <li>
              i18-next: Enables full multilingual support for an international
              user base.
            </li>
            <li>
              useRef: Facilitates direct DOM manipulation and better handling of
              form inputs and other interactive elements.
            </li>
            <li>
              react-icon: Adds icons for a more intuitive user experience.
            </li>
            <li>
              react-router-dom: Manages seamless navigation between pages.
            </li>
            <li>
              useEffect, useState, useMemo: Manage application lifecycle and
              performance optimizations.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring a seamless experience across different languages and RTL
              right-to-left support for Arabic.
            </li>
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/way_go_group.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/waygo_page",
      previewUrl: "https://eng-moaz-tello.github.io/waygo_page",
    },
    {
      id: 8,
      title: "YAMAN CACHIER",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Sales Management Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This web application is designed to streamline the management of
              sales, cash flow, and inventory for businesses.
            </li>
            <li>
              It offers a comprehensive suite of features that help users track
              transactions, monitor profits, and manage inventory, all within an
              intuitive and responsive interfaces.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Cashbox Management: Users can add cash to the cashbox and charge
              items to the store. The system calculates the price with and
              without profit, helping businesses track their earnings.
            </li>
            <li>
              Profit Calculation: Automatic monthly profit calculation based on
              sales. Every transaction is recorded and contributes to the
              overall profit report.
            </li>
            <li>
              Real-Time Inventory Management: When items are sold, the system
              automatically reduces the stock amount, ensuring up-to-date
              inventory levels.
            </li>
            <li>
              Invoice Generation: Invoices are generated for every sale, sent to
              the business owner&apos;s Telegram account, and printed via a
              thermal printer using ESC/POS.
            </li>
            <li>
              Admin Dashboard: Admins can export invoices to an Excel file, view
              all past invoices, monitor profits, and see the total cash in the
              cashbox.
            </li>
            <li>
              Editable Items: Users can adjust the quantity and prices of items
              to keep inventory data accurate.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              useContext: Ensures efficient state management across components.
            </li>
            <li>
              Firebase: Used for backend services, including data storage and
              authentication.
            </li>
            <li>Axios: Handles API requests efficiently.</li>
            <li>
              ESC/POS: Integrated for printing invoices via thermal printers.
            </li>
            <li>
              useEffect, useState, useMemo: Manage application lifecycle and
              performance optimizations.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Inventory and Cash Tracking: Ensuring accurate updates
              to inventory levels and cashbox amounts in real time.
            </li>
            <li>
              Seamless Invoice Generation: Sending invoices to Telegram and
              printing with thermal printers efficiently.
            </li>
            <li>
              Data Accuracy: Ensuring accurate calculations for monthly profits
              and cash flow management across the system.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/yaman_cashier.png",
      tag: ["All", "Web", "protect"],
      gitUrl: "https://github.com/moazTello/yaman_project",
      previewUrl: "https://eng-moaz-tello.github.io/yaman_project/",
    },
    {
      id: 9,
      title: "TELLO TOK",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Social Media Mobile App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This mobile application, inspired by TikTok, is designed for users
              to create, share, and discover short-form videos with ease.
            </li>
            <li>
              The app provides a platform for creative expression and social
              interaction through video content.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              User Authentication: Users can sign up and sign in to manage their
              profiles.
            </li>
            <li>
              Video Upload and Management: Users can upload videos from their
              device, using the built-in video picker, and delete their own
              content if needed.
            </li>
            <li>
              Favorite Videos: Users can mark videos as favorites and easily
              access them in their personal list.
            </li>
            <li>
              Recommended Videos: The app suggests videos tailored to the user’s
              preferences, ensuring a personalized content experience.
            </li>
            <li>
              Profile Editing: Users can update their account information and
              preferences.
            </li>
            <li>
              Smooth Animations and Performance: Integrated animations provide a
              smooth and engaging user experience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native Expo: Ensures cross-platform compatibility and ease
              of development.
            </li>
            <li>expo-router: Simplifies navigation across app screens.</li>
            <li>
              expo-image-picker & expo-document-picker: Enable users to upload
              videos from their devices.
            </li>
            <li>expo-av: Handles video playback functionality.</li>
            <li>
              useFonts: Adds custom fonts to enhance the app’s appearance.
            </li>
            <li>
              useContext, useState, useEffect: Manage state and handle app
              lifecycle efficiently.
            </li>
            <li>
              react-native-appwrite: Provides backend services such as
              authentication and file storage.
            </li>
            <li>
              react-native-animatable: Adds smooth, engaging animations for an
              enhanced user experience.
            </li>
            <li>
              MongoDB: Serves as the database for managing user data and video
              content.
            </li>
            <li>
              nativewind: For styling and ensuring a responsive, modern UI.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/tello_app.png",
      tag: ["All", "Mobile", "Download"],
      gitUrl: "/",
      previewUrl: "/",
      fileName: "Tello.apk",
    },
    {
      id: 10,
      title: "MOAZ CHAT APP",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Chat Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This chat application, inspired by WhatsApp, allows users to
              communicate in real time, manage their profiles, and enjoy music
              streaming directly within the app.
            </li>
            <li>
              Designed for a seamless and interactive messaging experience, it
              incorporates various modern technologies to ensure speed,
              security, and scalability.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Messaging: Users can send and receive messages instantly
              using socket.io for real-time communication.
            </li>
            <li>
              User Authentication: Secure sign-up and sign-in functionalities
              powered by JWT for token-based authentication.
            </li>
            <li>
              Profile Management: Users can edit their profile settings,
              ensuring a personalized experience.
            </li>
            <li>
              Music Streaming: Integrated music player for users to listen to
              music while using the app.
            </li>
            <li>
              Responsive Design: Tailwind CSS ensures a clean and modern UI that
              is responsive across devices.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Frontend framework for building a dynamic user
              interface.
            </li>
            <li>Zustand & useContext: Efficient state management solutions.</li>
            <li>socket.io: Handles real-time messaging and communication.</li>
            <li>
              Node.js & Express.js: Backend for managing user data, messaging,
              and API requests.
            </li>
            <li>
              MongoDB & Mongoose: Database and ORM for handling user profiles,
              messages, and settings.
            </li>
            <li>JWT: Secure authentication for user sessions.</li>
            <li>Vite: Fast build tool for optimized app performance.</li>
            <li>Tailwind CSS: Provides a responsive, modern user interface.</li>
            <li>
              useMemo, useRef, useEffect, useState: Ensure optimized performance
              and state management.
            </li>
            <li>react-router-dom: Navigation between different app pages.</li>
            <li>bcryptjs: Ensures secure password encryption.</li>
            <li>Multer: For file uploads, such as profile pictures.</li>
            <li>cookie-parser: Handles user session data in cookies.</li>
            <li>
              react-hot-toast: Delivers smooth, non-intrusive notifications.
            </li>
            <li>
              Deployed on Render: Ensures scalable and reliable app deployment.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/chat_app.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/moazChatApp",
      previewUrl: "https://moaztello-chat-app.onrender.com/",
    },
    {
      id: 11,
      title: "WASSELNY",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Taxi Booking App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This mobile application facilitates the process of booking taxis,
              providing a seamless interaction between clients, drivers, and
              admins.
            </li>
            <li>
              It allows clients to search for available drivers, track their
              location, and manage trips, while drivers can accept requests and
              handle multiple rides.
            </li>
            <li>
              Admins oversee the entire ecosystem, managing users and resolving
              issues.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              User Authentication: Clients, drivers, and admins can sign up and
              sign in securely.
            </li>
            <li>
              Driver Availability & Request Handling: Clients can search for
              available taxi drivers, send ride requests, and drivers can either
              accept or reject them.
            </li>
            <li>
              Real-Time Location Tracking: Both clients and drivers can view
              each other’s locations on a map during a trip.
            </li>
            <li>
              Trip Management: Clients can select a destination, see the
              estimated cost, and track the driver’s location. Drivers can mark
              trips as completed, enabling them to receive new requests.
            </li>
            <li>
              Issue Reporting: Both drivers and clients can report problems
              encountered during trips.
            </li>
            <li>
              Order & History Tracking: Clients and drivers can view their past
              trips and order history.
            </li>
            <li>
              Admin Dashboard: Admins can manage users clients and drivers,
              approve driver requests to join, and view reports on issues from
              both clients and drivers.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native: Ensures a smooth and responsive user interface for
              mobile devices.
            </li>
            <li>Expo-Router: Facilitates navigation within the application.</li>
            <li>
              Maps Integration: Allows real-time location tracking and
              destination selection for clients and drivers.
            </li>
            <li>
              useContext: Manages global state across different components.
            </li>
            <li>Axios: Efficient handling of API requests.</li>
            <li>
              Nativewind: Provides styling solutions for the mobile interface.
            </li>
            <li>
              Expo Image Picker: Enables users to upload images, such as driver
              documents or profile photos.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Tracking: Ensuring accurate, real-time location updates
              for both clients and drivers.
            </li>
            <li>
              Request Flow: Managing the lifecycle of ride requests, from
              searching to trip completion, while maintaining smooth
              interactions between clients and drivers.
            </li>
            <li>
              User Management: Efficiently handling driver approvals, client
              requests, and issue tracking within the admin panel.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/taxi.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 12,
      title: "FUSHA",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Tour Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This web application offers users the ability to explore exciting
              tours to destinations around the world.
            </li>
            <li>
              Clients can browse tours, view key details such as dates,
              locations, and pricing, and easily connect with trip organizers
              for booking.
            </li>
            <li>
              The platform also provides personalized tour recommendations based
              on users’ previous bookings, ensuring a tailored travel
              experience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Tour Listings: Clients can browse tours to various destinations,
              with details on the date, location, and cost of each tour.
            </li>
            <li>
              Organizer Connection: Clients can directly connect with tour
              organizers to book trips and ask questions.
            </li>
            <li>
              Personalized Recommendations: The app suggests trips based on the
              client&apos;s past travel history, helping them discover new
              destinations that suit their preferences.
            </li>
            <li>
              Multi-Language Support: The app offers multilingual support,
              allowing users to switch between languages via i18-next
              integration.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast and interactive user interface.</li>
            <li>
              useEffect, useState, useMemo: Handle application lifecycle, state
              management, and performance optimization.
            </li>
            <li>
              Custom Hooks: Improve reusability and functionality across
              components.
            </li>
            <li>
              useContext: Streamlines state management for global components.
            </li>
            <li>
              react-router-dom: Manages navigation between different sections of
              the app.
            </li>
            <li>
              Axios: Handles API requests for fetching tour details and
              recommendations.
            </li>
            <li>
              i18-next: Enables multi-language support, ensuring the app is
              accessible to a global audience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Recommendation Engine: Providing accurate and relevant trip
              recommendations based on past bookings.
            </li>
            <li>
              Seamless Booking: Ensuring smooth and intuitive interactions
              between clients and organizers for a hassle-free booking
              experience.
            </li>
            <li>
              Scalability: Supporting multiple languages and handling large
              amounts of tour data without compromising performance.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/fusha.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/demo",
      previewUrl: "https://eng-moaz-tello.github.io/demo/",
    },
    {
      id: 13,
      title: "SPACE TIME",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            Design Company Portfolio Website
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This portfolio website showcases the services and expertise of a
              design company, offering a sleek and visually appealing platform
              for potential clients to explore their work and connect via social
              media.
            </li>
            <li>
              The website is designed with a strong focus on aesthetics and user
              experience, ensuring that visitors can easily navigate and
              discover the company&apos;s offerings.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Service Showcase: The website highlights the company&apos;s range
              of design services in a visually engaging format.
            </li>
            <li>
              Social Media Integration: Direct links to the company’s social
              media accounts, allowing visitors to follow and connect with the
              brand.
            </li>
            <li>
              Responsive Design: Optimized for both desktop and mobile devices,
              ensuring a seamless experience across different screen sizes.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Bootstrap 5: Provides a responsive, mobile-first layout with
              built-in components and a modern design.
            </li>
            <li>
              HTML & CSS: Customizes the structure and style of the website,
              creating a unique and visually appealing design.
            </li>
            <li>
              Beautiful Design: Focused on clean, modern aesthetics that reflect
              the professionalism of the design company.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Aesthetic Consistency: Ensuring the design is both visually
              appealing and functional across various devices and screen sizes.
            </li>
            <li>
              Responsive Layout: Leveraging Bootstrap 5 to create a smooth,
              responsive experience without sacrificing design quality.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/space_time.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/space_time",
      previewUrl: "https://eng-moaz-tello.github.io/space_time/",
    },
    {
      id: 14,
      title: "IMAGE EDITOR",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Advanced Image Editor Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A fully interactive and intuitive image editing web application
              that empowers users to upload and transform their images with
              precision and ease.
            </li>
            <li>
              This tool is designed with modern UI/UX principles to deliver a
              seamless editing experience right in the browser—no need for
              external software.
            </li>
            <li>
              It offers a wide range of editing capabilities to cater to both
              casual users and creative professionals.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>Image Upload & Preview:</li>
            <li>
              <p>
                Instantly upload and view images with real-time editing
                feedback.
              </p>
            </li>
            <li>
              <p>Adjustable Filters:</p>
              <p className="ml-16 my-2">Saturation</p>
              <p className="ml-16 my-2">Contrast</p>
              <p className="ml-16 my-2">Grayscale</p>
              <p className="ml-16 my-2">Brightness</p>
              <p className="ml-16 my-2">
                Hue Rotation (Orange Tint Adjustment) lets users emphasize warm
                tones for a vibrant aesthetic.
              </p>
            </li>
            <li>
              <p>Image Transformations:</p>
              <p className="ml-16 my-2">Flip Vertically (Up-Down)</p>
              <p className="ml-16 my-2">Flip Horizontally (Left-Right)</p>
              <p className="ml-16 my-2">
                Rotate (Clockwise & Counter-Clockwise)
              </p>
            </li>
            <li>
              <p>Cropping Tool:</p>
              <p className="ml-16 my-2">
                Select and cut out specific regions of the image with precision.
              </p>
            </li>
            <li>
              <p>Download Edited Image:</p>
              <p className="ml-16 my-2">
                Export the final edited image in a high quality format.
              </p>
            </li>
            <li>
              <p>Responsive Design:</p>
              <p className="ml-16 my-2">
                Optimized for both desktop and mobile screens, ensuring smooth
                usability on all devices.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Delivers a fast, interactive, and component-driven
              front-end.
            </li>
            <li>
              Tailwind CSS: Enables clean and responsive design with
              utility-first styling.
            </li>
            <li>
              Built-in React Hooks (useState, useEffect, useRef, useMemo):
              Manage state, DOM interactions, and performance efficiently.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🎯 Purpose & Impact:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This project reflects a strong grasp of image manipulation,
              real-time rendering, and modern front-end development.
            </li>
            <li>
              It demonstrates the ability to combine usability with technical
              depth, providing an accessible solution for image editing that
              runs entirely in the browser no installations required.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/moaz_image_editor.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/Moaz_Tello_Image_Idetor",
      previewUrl: "https://eng-moaz-tello.github.io/Moaz_Tello_Image_Idetor/",
    },
    {
      id: 15,
      title: "PDF MINIMIZER",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            📄 PDF Note-Taking Assistant Web App
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A React.js-based web application designed to enhance the learning
              experience by transforming standard PDF files into
              student-friendly note-taking layouts.
            </li>
            <li>
              This intuitive tool allows users to upload a PDF, automatically
              minimize its content to the top-left quadrant of each page, and
              create clean, empty spaces for handwritten or typed notes—ideal
              for lectures, study sessions, and interactive learning.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              PDF Upload & Preview: Upload any standard PDF file and view the
              changes in real time.
            </li>
            <li>
              Smart Content Resizing: Automatically reduces the content of each
              page to the top-left quarter while maintaining readability.
            </li>
            <li>
              Note-Friendly Layout: Leaves the remaining 3/4 of the page
              blank—perfect for students to jot down thoughts, summaries, or
              annotations.
            </li>
            <li>
              Download Modified PDF: Export the transformed PDF with its new
              layout, ready for print or digital annotation.
            </li>
            <li>
              Responsive Design: Seamlessly usable across devices, including
              tablets and desktops.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Ensures a dynamic and smooth single-page application
              experience.
            </li>
            <li>
              PDF.js / pdf-lib: Handles reading, editing, and regenerating PDF
              documents on the client side.
            </li>
            <li>
              Tailwind CSS: Provides clean, responsive, and consistent styling
              across the app.
            </li>
            <li>
              React Hooks (useState, useEffect, useRef): Manage state,
              lifecycle, and DOM manipulation effectively.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🎯 Purpose & Impact:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This tool simplifies the process of preparing study-friendly PDFs,
              saving time for students and educators alike.
            </li>
            <li>
              It showcases practical use of PDF manipulation in the browser,
              thoughtful UX design for educational needs, and advanced file
              processing without requiring server-side operations.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/pdf_minimizer.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/mousa_shtewy",
      previewUrl: "https://eng-moaz-tello.github.io/mousa_shtewy/",
    },
    {
      id: 16,
      title: "DINTEST CLINIC",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            🦷 Dental Clinic Management Web App
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A modern React.js-based web application tailored for dental
              clinics to streamline patient management, enhance service
              visibility, and optimize daily workflows for doctors and their
              assistants.
            </li>
            <li>
              This all-in-one dashboard provides structured access to patient
              records, clinic information, and promotional service content,
              empowering healthcare professionals to focus more on care and less
              on paperwork.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Patient Account Management: Doctor assistants can create and
              manage patient profiles, input treatment details, and update
              personal and medical information.
            </li>
            <li>
              Doctor&apos;s Daily View: Doctors can easily view a list of
              scheduled patients for each day, with quick access to their
              medical histories and current treatment plans.
            </li>
            <li>
              Clinic Overview: Detailed sections providing an overview of the
              clinic, including doctors&apos; profiles, qualifications, and
              areas of expertise.
            </li>
            <li>
              Services & Promotions: Display of the clinic&apos;s available
              treatments and services, with integrated advertisement banners for
              featured services or seasonal promotions.
            </li>
            <li>
              Responsive & User-Friendly Design: Clean, mobile-friendly UI
              ensures seamless use on tablets, desktops, or at reception desks.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Front-end library for dynamic and responsive interface
              development.
            </li>
            <li>
              Tailwind CSS: Rapid styling for consistent and clean layout
              design.
            </li>
            <li>
              Zustand: Lightweight state management for scalable and efficient
              app behavior.
            </li>
            <li>
              React Router DOM: Smooth navigation across patient records,
              dashboards, and info pages.
            </li>
            <li>
              React Icons: Enhances the visual user experience with familiar
              iconography.
            </li>
            <li>
              React Hooks (useState, useEffect, useRef, useMemo): Power core
              interactions and optimize performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🎯 Purpose & Impact:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This application bridges administrative needs with patient care,
              helping dental clinics move away from paper-based systems toward a
              streamlined, digital-first approach.
            </li>
            <li>
              It demonstrates strong UX thinking, solid form and data
              management, and effective role-based UI behavior for medical
              workflows.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/dintest_clinic.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/dintest",
      previewUrl: "https://eng-moaz-tello.github.io/dintest/",
    },
    {
      id: 17,
      title: "MUFEED AI",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">
            🤖 AI Access & Global Payment Platform
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A full-featured React.js web application that democratizes access
              to GPT-3.5 by enabling flexible payment options and integrating
              Telegram for mobile AI interaction.
            </li>
            <li>
              Designed for global users—especially those without access to
              traditional online payment methods—this platform provides a
              seamless experience to subscribe, interact, and benefit from
              powerful AI tools.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              <p>User Account System:</p>
              <p className="ml-16 my-2">
                Secure sign-up and login functionality for individual user
                profiles.
              </p>
            </li>
            <li>
              <p>Flexible Payment Integration:</p>
              <p className="ml-16 my-2">
                Online Payments: Support for PayPal and Mastercard for instant
                access.
              </p>
              <p className="ml-16 my-2">
                Offline Payments: For users in regions without access to online
                payment services:
              </p>
              <p className="ml-16 my-2">
                Pay at physical money transfer companies (e.g., Western Union,
                MoneyGram).
              </p>
              <p className="ml-16 my-2">
                Upload a photo of the receipt for manual verification.
              </p>
            </li>
            <li>
              <p>Custom Pricing Offers:</p>
              <p className="ml-16 my-2">
                View and choose from multiple AI usage packages and promotional
                offers.
              </p>
            </li>
            <li>
              <p>Telegram Bot Integration:</p>
              <p className="ml-16 my-2">
                Use GPT-3.5 directly from your smartphone via a Telegram bot,
                ensuring accessibility and ease of use without needing to stay
                on the website.
              </p>
            </li>
            <li>
              <p>Community Feedback:</p>
              <p className="ml-16 my-2">
                Users can upload reviews and file complaints.
              </p>
              <p className="ml-16 my-2">
                Public review section allows users to read others experiences
                and build trust.
              </p>
            </li>
            <li>
              <p>Responsive Design:</p>
              <p className="ml-16 my-2">
                Fully optimized for desktop and mobile, making it accessible
                from any device.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Modern front-end framework enabling interactive and
              scalable UIs.
            </li>
            <li>
              Tailwind CSS: Utility-first styling for consistent and
              mobile-friendly design.
            </li>
            <li>Axios: Handles secure API communication.</li>
            <li>
              React Router DOM: Enables seamless navigation between user
              dashboard, reviews, and payment pages.
            </li>
            <li>
              Zustand: Simple yet powerful state management across the app.
            </li>
            <li>
              React Hook Form: Provides robust form handling for payments,
              uploads, and user feedback.
            </li>
            <li>
              Built-in React Hooks (useState, useEffect, useRef, etc.):
              Optimized interaction handling and performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🎯 Purpose & Impact:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This project empowers users from underbanked regions to gain
              access to advanced AI tools through inclusive payment options and
              mobile-friendly interfaces.
            </li>
            <li>
              It showcases a thoughtful approach to global accessibility,
              third-party integration (Telegram), secure user management, and
              community engagement through reviews and support channels.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/mufid_ai.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/newkamal",
      previewUrl: "https://eng-moaz-tello.github.io/newkamal/",
    },
    {
      id: 18,
      title: "XTRAVEL",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support Arabic and English and
              integrates electronic payment systems to provide users with a
              seamless and efficient booking experience.
            </li>
            <li>
              Users can easily search for available bus routes, select their
              preferred travel times, and secure their tickets online.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">✨ Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Secure Payments: Integrated electronic payment gateway for quick
              and secure transactions.
            </li>
            <li>
              Real-Time Availability: Users can view real-time bus schedules and
              seat availability.
            </li>
            <li>
              Responsive Design: Optimized for various screen sizes and devices
              for easy access from anywhere.
            </li>
            <li>
              🛠 Tech Stack: Built with React.js, ensuring fast rendering, smooth
              performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">🛠 Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              useContext: Ensures efficient state management across components.
            </li>
            <li>Axios: Handles API requests efficiently.</li>
            <li>
              useRef: Facilitates direct DOM manipulation and better handling of
              form inputs and other interactive elements.
            </li>
            <li>
              react-icon: Adds icons for a more intuitive user experience.
            </li>
            <li>
              react-router-dom: Manages seamless navigation between pages.
            </li>
            <li>
              useEffect, useState, useMemo: Manage application lifecycle and
              performance optimizations.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/xtravel.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/junior",
      previewUrl: "https://eng-moaz-tello.github.io/junior/",
    },
  ];
  const projectsRef = useRef(null);
  const isInview = useInView(projectsRef, { once: true });
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );
  const variants = {
    initial: { scale: 0.5, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjcetTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjcetTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjcetTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
        {/* <ProjcetTag
          name="Design"
          onClick={handleTagChange}
          isSelected={tag === "Design"}
        /> */}
      </div>
      {/* <ul ref={projectsRef} className="grid md:grid-cols-4 gap-2 md:gap-12"> */}
      <ul ref={projectsRef}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.8 }}
          >
            <ProjectCard
              // ref={projectsRef}
              // key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
              fileName={project?.fileName}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
