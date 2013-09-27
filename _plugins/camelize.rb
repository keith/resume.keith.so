module Jekyll
  module Camelize
    def camelize(input)
      input.split.map(&:capitalize).join(' ').gsub(/\s+/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Camelize)

