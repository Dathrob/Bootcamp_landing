import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        preferred_course: '',
        entry_level: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Student Onboarding" />
            <header className="w-full bg-white shadow-md z-30 fixed top-0 left-0">
  <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
    {/* Logo / Brand */}
    <div className="text-3xl font-extrabold text-indigo-700 tracking-wide">
      <a href="/">DevLaunch</a>
    </div>

    {/* Main Menu */}
    <nav className="hidden md:flex gap-10 text-lg font-semibold text-gray-800">
      <a href="/" className="hover:text-indigo-600 transition">Home</a>
      <a href="#courses" className="hover:text-indigo-600 transition">Courses</a>
      <a href="#partners" className="hover:text-indigo-600 transition">Partners</a>
      {/* <a href="/login" className="hover:text-indigo-600 transition">Login</a> */}
    </nav>

    {/* Join Now Button */}
    <div className="hidden md:block">
      <a
        href="/register"
        className="bg-indigo-700 text-white px-6 py-3 text-lg rounded-xl font-bold hover:bg-indigo-800 transition"
      >
        Join Now
      </a>
    </div>
  </div>
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
                            <InputLabel htmlFor="preferred_course" value="Preferred Course" className="text-white" />
                            <select
                                id="preferred_course"
                                value={data.preferred_course}
                                onChange={(e) => setData('preferred_course', e.target.value)}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:bg-white/50"
                                required
                            >
                                <option value="">-- Select --</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="AI & Machine Learning">AI & Machine Learning</option>
                                <option value="Data Science">Data Science</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="DevOps & Cloud">DevOps & Cloud</option>
                            </select>
                            <InputError message={errors.preferred_course} className="mt-2 text-red-300" />
                        </div>

                        {/* Entry Level */}
                        <div>
                            <InputLabel htmlFor="entry_level" value="Entry Level" className="text-white" />
                            <select
                                id="entry_level"
                                value={data.entry_level}
                                onChange={(e) => setData('entry_level', e.target.value)}
                                className="mt-1 block w-full bg-white/30 text-white border-white/30 rounded-lg px-3 py-2 focus:outline-none focus:bg-white/50"
                                required
                            >
                                <option value="">-- Select --</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
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
