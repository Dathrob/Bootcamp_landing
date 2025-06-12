import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Menu, X } from "lucide-react";
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        preferred_course: '',
        entry_level: '',
        email: '',
        password: '',
        password_confirmation: '',
        goal_after_program: '',
    });
    

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <Head title="Student Onboarding" />
            <header className="w-full bg-white shadow-md z-30 fixed top-0 left-0">
              <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-indigo-700 tracking-wide">
            <a href="/">Cyber Tech</a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold text-gray-800">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <a href="#courses" className="hover:text-indigo-600 transition">Courses</a>
            <a href="#partners" className="hover:text-indigo-600 transition">Partners</a>
            <a href="#faq" className="hover:text-indigo-600 transition">FAQs</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact Us</a>
            <Link href="/login" className="hover:text-indigo-600 transition">Login</Link>
          </nav>

          {/* Join Now button (Desktop only) */}
          <div className="hidden md:block">
            <Link
              href="/register"
              className="bg-indigo-700 text-white px-5 py-2 text-lg rounded-xl font-bold hover:bg-indigo-800 transition"
            >
            Apply
            </Link>
          </div>

          {/* Hamburger Icon (Mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
              </div>

              {/* Mobile Menu */}
              {menuOpen && (
                <div className="md:hidden px-6 pb-4 text-gray-800 space-y-4 text-lg font-semibold">
                  <Link href="/" className="block hover:text-indigo-600">Home</Link>
                  <a href="#courses" className="block hover:text-indigo-600">Courses</a>
                  <a href="#partners" className="block hover:text-indigo-600">Partners</a>
                  <a href="#faq" className="block hover:text-indigo-600">FAQ</a>
                  <a href="#contact" className="block hover:text-indigo-600">Contact Us</a>
                  <a href="/apply" className="block hover:text-indigo-600">Apply</a>
                  {/* <a href="/interview" className="block hover:text-indigo-600">Interview</a> */}
                  <a href="/login" className="block hover:text-indigo-600">Login</a>
                  <Link
                    href="/register"
                    className="block bg-indigo-700 text-white px-4 py-2 rounded-lg text-center font-bold hover:bg-indigo-800"
                  >
                  Apply
                  </Link>
                </div>
              )}
            </header>
            <section
        className="w-full mt-10 min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center px-4 py-12"
        style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
    >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full max-w-2xl text-white border border-white/20">
            <h2 className="text-3xl font-extrabold mb-6 text-center">
                        🚀  Onboarding Form
                    </h2>

                    <form onSubmit={submit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <InputLabel htmlFor="name" value="Full Name" className="text-white" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 focus:bg-white/50"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2 text-red-300" />
                        </div>

                        {/* Phone */}
                        <div>
                            <InputLabel htmlFor="phone" value="Phone Number" className="text-white" />
                            <TextInput
                                id="phone"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 focus:bg-white/50"
                                onChange={(e) => setData('phone', e.target.value)}
                                required
                            />
                            <InputError message={errors.phone} className="mt-2 text-red-300" />
                        </div>

                        {/* Preferred Course */}
                        <div>
                        <InputLabel htmlFor="preferred_course" value="Courses You're Interested In" className="text-white" />
                        <select
  id="preferred_course"
  value={data.preferred_course}
  onChange={(e) => setData('preferred_course', e.target.value)}
  className="mt-1 block w-full bg-white/30 text-white border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:bg-white/50"
  required
>
  <option value="" >-- Select a course --</option>
  <option value="Data Science and AI" className="bg-white text-indigo-900">Data Science and AI</option>
  <option value="Full Stack Software Development" className="bg-white text-indigo-900">Full Stack Software Development</option>
  <option value="Frontend Development" className="bg-white text-indigo-900">Frontend Development</option>
  <option value="Backend Development and APIs" className="bg-white text-indigo-900">Backend Development and APIs</option>
  <option value="Python Programming" className="bg-white text-indigo-900">Python Programming</option>
  <option value="Machine Learning" className="bg-white text-indigo-900">Machine Learning</option>
  <option value="Programming Fundamentals" className="bg-white text-indigo-900">Programming Fundamentals</option>
  <option value="Coding for Kids and Teens" className="bg-white text-indigo-900">Coding for Kids and Teens</option>
</select>
                        <InputError message={errors.preferred_course} className="mt-2 text-red-300" />
                    </div>

                        {/* Entry Level */}
                        <div>
                            <InputLabel htmlFor="entry_level" value="Education Level" className="text-white" />
                            <select
                                id="entry_level"
                                value={data.entry_level}
                                onChange={(e) => setData('entry_level', e.target.value)}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:bg-white/50"
                                required
                            >
                                <option value="">-- Select --</option>
                                <option value="5-12" className="bg-white text-indigo-900">Grade 5-12</option>
                                <option value="Univ" className="bg-white text-indigo-900">Higher Institution Student</option>
                                <option value="job" className="bg-white text-indigo-900">On Job</option>
                            </select>
                            <InputError message={errors.entry_level} className="mt-2 text-red-300" />
                        </div>

                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-white" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 focus:bg-white/50"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2 text-red-300" />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-white" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 focus:bg-white/50"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2 text-red-300" />
                        </div>

                        {/* Password Confirmation */}
                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-white" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 focus:bg-white/50"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2 text-red-300" />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4">
                            <Link
                                href={route('login')}
                                className="text-sm text-white underline hover:text-blue-200"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton disabled={processing} className=" text-black-700 font-semibold hover:bg-blue-100 transition">
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </section>
            </>

    );
}
