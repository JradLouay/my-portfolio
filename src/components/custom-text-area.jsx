function CustomTextArea({ type, label, title, placeholder, required }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={title} className="text-[40px] font-medium text-gray-700">
        {label}
      </label>
      <textarea
        name={title}
        id={title}
        rows={3}
        type={type}
        style={{ resize: "none" }}
        className="rounded-sm border-b-[3px] border-gray-700 bg-transparent text-[25px] font-medium text-gray-700 outline-none placeholder:text-gray-700 hover:border-violet-500 hover:transition hover:duration-100 hover:ease-linear focus:border-violet-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default CustomTextArea;
