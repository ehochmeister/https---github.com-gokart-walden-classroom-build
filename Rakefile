task :default => :init

task :init do
  sh "git clone git@github.com:gokart/one-tesla-data.git _one-tesla-data --branch master --single-branch --depth 1" # https://stackoverflow.com/questions/19352894/how-to-git-fetch-efficiently-from-a-shallow-clone
  Rake::Task["import"].invoke
  sh "npm install"
end

desc "Build"
task :build do
  sh "jekyll build"
end

desc "Serve"
task :serve do
  sh "jekyll serve"
end

desc "Clean"
task :clean do
  ["_one-tesla-data","_site","_public","_assets/vendor","tmp","node_modules","firebase-debug.log",".asset-cache",".sass-cache"].each do |t|
    rm_rf t
  end
  sh "git clean -dfx"
end

desc "Deploy"
task :deploy do
  Rake::Task["dist"].invoke
  sh "node_modules/.bin/firebase deploy -f walden-staging"
end

desc "Package Zip File for Distribution"
task :dist do
  sh "rm -f _site/dist.zip && zip -r dist.zip _site && mv dist.zip _site"
end

desc "Test"
task :test do
  sh "htmlproofer ./_site"
end

desc "Import content from One Tesla Data"
task :import do
  FileUtils.cp_r '_one-tesla-data/courses-config/.', '_data/courses'
  FileUtils.cp_r '_one-tesla-data/courses/.', '_courses'
end

# namespace :hard_links do

  # Omitting this too, because darn it, Circle CI won't permit hard links

  # task :build do
  #   course_configs = Dir.glob('_one-tesla-data/courses-config/*.yml').select{ |e| File.file? e }
  #   courses = Dir.glob('_one-tesla-data/courses/**/*').reject{ |e| !File.directory? e }
  #   courses.each do|course|
  #     destination = '_courses/' + File.basename(course)
  #     if !File.exist?(destination)
  #       FileUtils.ln( File.realpath(course),destination)
  #     end
  #   end
  #   course_configs.each do|course_config|
  #     destination = '_data/courses/' + File.basename(course_config)
  #     if !File.exist?(destination)
  #       FileUtils.ln( File.realpath(course_config),destination)
  #     end
  #   end
  # end

  ## Omitting :clean and :build for now because Jekyll doesn't build symbolic links :-()

  # task :clean do
  #   courses = Dir.glob('_courses/*').select{ |e| File.symlink? e }
  #   courses.each do|course|
  #     rm course
  #   end
  #   course_configs = Dir.glob('_data/courses/*.yml').select{ |e| File.symlink? e }
  #   course_configs.each do|course_config|
  #     rm course_config
  #   end
  # end

  # task :build do
  #   course_configs = Dir.glob('_one-tesla-data/courses-config/*.yml').select{ |e| File.file? e }
  #   courses = Dir.glob('_one-tesla-data/courses/**/*').reject{ |e| !File.directory? e }
  #   courses.each do|course|
  #     destination = '_courses/' + File.basename(course)
  #     if !File.exist?(destination)
  #       File.symlink( File.realpath(course),destination)
  #     end
  #   end
  #   course_configs.each do|course_config|
  #     destination = '_data/courses/' + File.basename(course_config)
  #     if !File.exist?(destination)
  #       File.symlink( File.realpath(course_config),destination)
  #     end
  #   end
  # end

# end