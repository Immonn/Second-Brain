export function Input({ onChange, placeholder }: { onChange: () => void; placeholder: string }) {
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2.5 border rounded m-2 text-left placeholder:text-left w-100 border-gray-100 " onChange={onChange} />
    </div>
}

