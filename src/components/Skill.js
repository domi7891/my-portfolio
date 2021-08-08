function Skill({ name, subname, color, percentage }) {
  return (
    <div className="w-full flex flex-col">
      <h2
        className={`text-base text-gray_variant-dark font-semibold ${
          subname ? 'mb-4' : 'mb-5'
        } uppercase`}
      >
        {name}
        <br />
        <small className="normal-case text-xs">{subname}</small>
      </h2>
      <div className="relative h-[3px]">
        <div className="w-full h-full rounded-full bg-gray-300 z-[1]"></div>
        <div
          className={`absolute left-0 top-0 h-full rounded-full ${percentage} ${color} z-[2]`}
        ></div>
      </div>
    </div>
  )
}

export default Skill
