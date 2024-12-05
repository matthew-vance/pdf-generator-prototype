use tauri::{Theme, Window};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![toggle_theme])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn toggle_theme(window: Window) {
  // get current theme
  if let Ok(theme) = window.theme() {
    // toggle theme
    if theme == Theme::Dark {
      let _ = window.set_theme(Some(Theme::Light));
    } else {
      let _ = window.set_theme(Some(Theme::Dark));
    }
  } else {
    eprintln!("Failed to get the current theme");
  }
}